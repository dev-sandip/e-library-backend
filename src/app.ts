import express, { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { globalErrorHandler } from "./globalErrorHandler";
import userRouter from "./users/userRouter";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
//user Router
app.use("/api/users", userRouter);
//global error handler
app.use(globalErrorHandler);
export default app;
