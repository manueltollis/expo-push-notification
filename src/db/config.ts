import dotenv from "dotenv";
dotenv.config();

export const db_name = process.env.POSTGRES_DB_NAME;
export const db_user = process.env.POSTGRES_USER;
export const db_password = process.env.POSTGRES_PASSWORD;
export const db_host = process.env.POSTGRES_HOST;
