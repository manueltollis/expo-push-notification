/**
 * Express router for handling push notifications.
 * @router
 * @name pushRouter
 * @typedef {import('express').Router} Router
 */
import { Router } from "express";
import pushService from "../../services/push-service";

const pushRouter = Router();

pushRouter.post("/notify-users", pushService.notifyUsers);

export default pushRouter;
