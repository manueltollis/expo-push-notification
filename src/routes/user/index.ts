import { Router } from "express";
import UserService from "../../services/user-service";

const userRouter = Router();

/**
 * Registers a user's device token
 * @param req - The request object
 * @param res - The response object
 * @param token - The device token to register
 * @param userId - The ID of the user associated with the device that comes from Firebase
 * @param email - The email address of the user associated with the device
 */
userRouter.post(
  "/register-token",
  (res, req, next) => {
    console.log("Called before");
    next();
  },

  UserService.registerToken
);

userRouter.post("/", (req, res) => {
  res.send("Test");
});

export default userRouter;
