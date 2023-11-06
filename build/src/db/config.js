"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_host = exports.db_password = exports.db_user = exports.db_name = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.db_name = process.env.POSTGRES_DB_NAME;
exports.db_user = process.env.POSTGRES_USER;
exports.db_password = process.env.POSTGRES_PASSWORD;
exports.db_host = process.env.POSTGRES_HOST;
//# sourceMappingURL=config.js.map