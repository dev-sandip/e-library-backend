import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import { config } from "./config/config";

export const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode || 500;
  return res.status(statusCode).json({
    message: err.message,
    errorStack: config.env === "production" ? "🤫" : err.stack,
    status: statusCode,
  });
};
