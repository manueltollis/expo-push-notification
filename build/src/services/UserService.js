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
const drizzle_orm_1 = require("drizzle-orm");
const zod_1 = require("zod");
const db_1 = require("../db");
const schema_1 = require("../db/schema");
exports.default = {
    registerToken: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Registering token");
        console.log("body", req.body);
        const body = zod_1.z
            .object({
            token: zod_1.z.string(),
            userId: zod_1.z.string(),
            email: zod_1.z.string(),
        })
            .safeParse(req.body);
        if (!body.success) {
            res.status(400).send("Invalid request body");
            return;
        }
        const { email, token, userId } = body.data;
        const user = (yield db_1.db.select().from(schema_1.users).where((0, drizzle_orm_1.eq)(schema_1.users.uuid, userId)))[0];
        if (!user) {
            res.status(400).send("User not found");
            return;
        }
        console.log("User", user);
        res.send("User registered");
    }),
};
//# sourceMappingURL=UserService.js.map