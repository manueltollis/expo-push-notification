"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.migrationClient = void 0;
const postgres_js_1 = require("drizzle-orm/postgres-js");
const postgres_1 = __importDefault(require("postgres"));
const config_1 = require("./config");
console.log("Connecting to database");
// for migrations
exports.migrationClient = (0, postgres_1.default)({
    database: config_1.db_name,
    user: config_1.db_user,
    password: config_1.db_password,
    host: config_1.db_name,
    max: 1,
});
// for query purposes
const queryClient = (0, postgres_1.default)({
    database: "postgres",
    user: config_1.db_user,
    password: config_1.db_password,
    host: "postgres",
});
exports.db = (0, postgres_js_1.drizzle)(queryClient);
//# sourceMappingURL=index.js.map