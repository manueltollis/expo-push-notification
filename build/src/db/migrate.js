"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postgres_js_1 = require("drizzle-orm/postgres-js");
const migrator_1 = require("drizzle-orm/postgres-js/migrator");
const _1 = require(".");
(0, migrator_1.migrate)((0, postgres_js_1.drizzle)(_1.migrationClient), {
    migrationsFolder: "drizzle",
})
    .then(() => {
    console.log("Migrations complete");
}, (err) => {
    console.error("Error running migrations", err);
})
    .catch((err) => {
    console.error("Error launching migrations", err);
});
//# sourceMappingURL=migrate.js.map