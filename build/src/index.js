"use strict";
/**
 * This file contains the main server code for the Expo push notification service.
 * @packageDocumentation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const push_1 = __importDefault(require("./routes/push"));
console.log("Creating app");
const app = (0, express_1.default)();
app.use(express_1.default.json()); // for parsing application/json
app.use(express_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use("/users", user_1.default);
app.use("/push", push_1.default);
/**
 * Responds with "Hello World!" when the root URL is requested
 * @param req - The request object
 * @param res - The response object
 */
app.get("/", (req, res) => {
    res.send("Hello World!");
});
/**
 * Starts the server on port 3000
 */
app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});
//# sourceMappingURL=index.js.map