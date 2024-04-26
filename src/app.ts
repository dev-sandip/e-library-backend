import express, { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { globalErrorHandler } from "./globalErrorHandler";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
//global error handler
app.use(globalErrorHandler);
export default app;
