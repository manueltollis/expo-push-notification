import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { migrationClient } from "../";

migrate(drizzle(migrationClient), {
  migrationsFolder: "drizzle",
})
  .then(
    () => {
      console.log("Migrations complete");
    },
    (err) => {
      console.error("Error running migrations", err);
    }
  )
  .catch((err) => {
    console.error("Error launching migrations", err);
  })
  .finally(() => {
    process.exit(0);
  });
