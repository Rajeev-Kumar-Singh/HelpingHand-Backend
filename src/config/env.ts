import dotenv from "dotenv";

dotenv.config();

type NodeEnv = "development" | "production" | "test";

function parsePort(rawPort: string | undefined): number {
  const port = Number(rawPort ?? "5000");

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("PORT must be a positive integer");
  }

  return port;
}

function parseNodeEnv(rawEnv: string | undefined): NodeEnv {
  const value = (rawEnv ?? "development") as NodeEnv;

  if (!["development", "production", "test"].includes(value)) {
    throw new Error("NODE_ENV must be development, production, or test");
  }

  return value;
}

function requireValue(value: string | undefined, key: string): string {
  if (!value) {
    throw new Error(`${key} is required`);
  }

  return value;
}

export const env = {
  nodeEnv: parseNodeEnv(process.env.NODE_ENV),
  port: parsePort(process.env.PORT),
  corsOrigin: process.env.CORS_ORIGIN ?? "*",
  databaseUrl: requireValue(process.env.DATABASE_URL, "DATABASE_URL")
};
