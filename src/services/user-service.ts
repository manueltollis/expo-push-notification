import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "../db";
import { users } from "../db/schema";
import { Request, Response } from "express";

export default {
  registerToken: async (req: Request, res: Response) => {
    console.log("Registering token");

    console.log("body", req.body);
    const body = z
      .object({
        token: z.string(),
        userId: z.string(),
        email: z.string(),
      })
      .safeParse(req.body);

    if (!body.success) {
      res.status(400).send("Invalid request body");
      return;
    }

    const { email, token, userId } = body.data;

    const user = (
      await db.select().from(users).where(eq(users.uuid, userId))
    )[0];

    if (!user) {
      res.status(400).send("User not found");
      return;
    }

    console.log("User", user);
    res.send("User registered");
  },
};
