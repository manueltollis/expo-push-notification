"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_service_1 = __importDefault(require("../../services/user-service"));
const userRouter = (0, express_1.Router)();
/**
 * Registers a user's device token
 * @param req - The request object
 * @param res - The response object
 * @param token - The device token to register
 * @param userId - The ID of the user associated with the device that comes from Firebase
 * @param email - The email address of the user associated with the device
 */
userRouter.post("/register-token", (res, req, next) => {
    console.log("Called before");
    next();
}, user_service_1.default.registerToken);
userRouter.post("/", (req, res) => {
    res.send("Test");
});
exports.default = userRouter;
//# sourceMappingURL=index.js.map