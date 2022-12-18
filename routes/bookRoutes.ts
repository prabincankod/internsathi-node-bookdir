import { Request, Response, Router } from "express";
import {
  addBook,
  deleteBook,
  editBook,
  searchBook,
} from "../controllers/booksController";

const bookRouter = Router();
bookRouter.post("/", addBook);
bookRouter.delete("/delete/:id", deleteBook);
bookRouter.put("/edit/:id", editBook);
bookRouter.post("/search", searchBook);

export default bookRouter;
