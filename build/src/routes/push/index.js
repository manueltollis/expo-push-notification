"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Express router for handling push notifications.
 * @router
 * @name pushRouter
 * @typedef {import('express').Router} Router
 */
const express_1 = require("express");
const push_service_1 = __importDefault(require("../../services/push-service"));
const pushRouter = (0, express_1.Router)();
pushRouter.post("/notify-users", push_service_1.default.notifyUsers);
exports.default = pushRouter;
//# sourceMappingURL=index.js.map