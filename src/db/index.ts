import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { db_name, db_password, db_user } from "./config";

console.log("Connecting to database");

// for migrations
export const migrationClient = postgres({
  database: db_name,
  user: db_user,
  password: db_password,
  host: db_name,
  max: 1,
});

// for query purposes
const queryClient = postgres({
  database: "postgres",
  user: db_user,
  password: db_password,
  host: "postgres",
});

export const db = drizzle(queryClient);
