import { NextFunction, Request, Response } from "express";

class BookController {
  public static createBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    console.log(req.files);
    res.send("Book created");
  };
}
export default BookController;
