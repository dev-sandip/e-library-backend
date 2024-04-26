import { Router } from "express";
import UserController from "./userController";

const userRouter = Router();
userRouter.post("/register", UserController.createUser);
userRouter.post("/login", UserController.login);
export default userRouter;
