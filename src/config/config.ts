import { configDotenv } from "dotenv";

configDotenv();
const _config = {
  port: process.env.PORT,
};
export const config = Object.freeze(_config);
