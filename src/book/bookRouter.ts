import { Router } from "express";
import BookController from "./bookController";
import multer from "multer";
import path from "node:path";
import authenticate from "../middlewares/authenticate";

const bookRouter = Router();

const upload = multer({
  dest: path.resolve(__dirname, "../../public/data/uploads"),
  limits: { fileSize: 10e6 },
  //put limit 10 mb
});

bookRouter.post(
  "/",
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  authenticate,
  BookController.createBook
);
bookRouter.patch(
  "/:bookId",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  BookController.updateBook
);

bookRouter.get("/", BookController.listBooks);
bookRouter.get("/:bookId", BookController.getSingleBook);

bookRouter.delete("/:bookId", authenticate, BookController.deleteBook);

export default bookRouter;
