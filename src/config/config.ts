import { configDotenv } from "dotenv";

configDotenv();
const _config = {
  port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  env: process.env.NODE_ENV,
  jwtSecret: process.env.JWT_SECRET,
  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
  frontendUrl: process.env.FRONTEND_URL,
};
export const config = Object.freeze(_config);
