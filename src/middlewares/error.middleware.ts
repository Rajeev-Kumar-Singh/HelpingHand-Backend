import { NextFunction, Request, Response } from "express";

export function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  const statusCode = 500;

  res.status(statusCode).json({
    message: err.message || "Internal Server Error"
  });
}
