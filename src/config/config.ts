import { configDotenv } from "dotenv";

configDotenv();
const _config = {
  port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  env: process.env.NODE_ENV,
};
export const config = Object.freeze(_config);
