import express, { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { globalErrorHandler } from "./globalErrorHandler";
import userRouter from "./users/userRouter";
import bookRouter from "./book/bookRouter";
import cors from "cors";
import { config } from "./config/config";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: config.frontendUrl,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
//user Router
app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);
//global error handler
app.use(globalErrorHandler);
export default app;
