import { Router } from "express";
import BookController from "./bookController";
import multer from "multer";
import path from "node:path";

const bookRouter = Router();

const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: { fileSize: 3e7 },
});
bookRouter.post(
  "/",
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  BookController.createBook
);

export default bookRouter;
