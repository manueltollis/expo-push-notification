"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushTokens = exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    email: (0, pg_core_1.text)("email").notNull().unique(),
    uuid: (0, pg_core_1.text)("uuid").notNull().unique(),
});
exports.pushTokens = (0, pg_core_1.pgTable)("push_tokens", {
    id: (0, pg_core_1.serial)("id").primaryKey(),
    token: (0, pg_core_1.text)("token").notNull().unique(),
    userUuid: (0, pg_core_1.text)("user_uuid")
        .notNull()
        .references(() => exports.users.uuid),
});
//# sourceMappingURL=schema.js.map