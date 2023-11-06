"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const db_1 = require("../db");
const drizzle_orm_1 = require("drizzle-orm");
const schema_1 = require("../db/schema");
const expo_1 = require("../expo");
exports.default = {
    notifyUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const users = zod_1.z
            .object({
            users: zod_1.z.array(zod_1.z.string()),
            message: zod_1.z.string(),
            title: zod_1.z.string(),
        })
            .safeParse(req.body);
        if (!users.success) {
            res.status(400).send("Invalid request body");
            return;
        }
        const _users = users.data;
        console.log("_users", _users);
        const uuids = (yield db_1.db
            .select({
            uid: schema_1.users.uuid,
        })
            .from(schema_1.users)
            .where((0, drizzle_orm_1.inArray)(schema_1.users.email, _users.users))).map((user) => user.uid);
        console.log("uuids", uuids);
        const tokens = (yield db_1.db
            .select({
            token: schema_1.pushTokens.token,
        })
            .from(schema_1.pushTokens)
            .where((0, drizzle_orm_1.inArray)(schema_1.pushTokens.userUuid, uuids))).map((token) => token.token);
        yield (0, expo_1.sendMessage)(tokens, _users.message, _users.title);
        res.send("OK");
    }),
};
//# sourceMappingURL=push-service.js.map