import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  uuid: text("uuid").notNull().unique(),
});

export const pushTokens = pgTable("push_tokens", {
  id: serial("id").primaryKey(),
  token: text("token").notNull().unique(),
  userUuid: text("user_uuid")
    .notNull()
    .references(() => users.uuid),
});
