"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postgres_js_1 = require("drizzle-orm/postgres-js");
const migrator_1 = require("drizzle-orm/postgres-js/migrator");
const __1 = require("../");
(0, migrator_1.migrate)((0, postgres_js_1.drizzle)(__1.migrationClient), {
    migrationsFolder: "drizzle",
})
    .then(() => {
    console.log("Migrations complete");
}, (err) => {
    console.error("Error running migrations", err);
})
    .catch((err) => {
    console.error("Error launching migrations", err);
})
    .finally(() => {
    process.exit(0);
});
//# sourceMappingURL=migrate.js.map