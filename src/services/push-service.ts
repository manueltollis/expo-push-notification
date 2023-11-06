import { Request, Response } from "express";
import { z } from "zod";
import { db } from "../db";
import { inArray } from "drizzle-orm";
import { pushTokens, users as usersTable } from "../db/schema";
import { sendMessage } from "../expo";

export default {
  notifyUsers: async (req: Request, res: Response) => {
    const users = z
      .object({
        users: z.array(z.string()),
        message: z.string(),
        title: z.string(),
      })
      .safeParse(req.body);

    if (!users.success) {
      res.status(400).send("Invalid request body");
      return;
    }

    const _users = users.data;

    console.log("_users", _users);

    const uuids = (
      await db
        .select({
          uid: usersTable.uuid,
        })
        .from(usersTable)
        .where(inArray(usersTable.email, _users.users))
    ).map((user) => user.uid);

    console.log("uuids", uuids);

    const tokens = (
      await db
        .select({
          token: pushTokens.token,
        })
        .from(pushTokens)
        .where(inArray(pushTokens.userUuid, uuids))
    ).map((token) => token.token);

    await sendMessage(tokens, _users.message, _users.title);

    res.send("OK");
  },
};
