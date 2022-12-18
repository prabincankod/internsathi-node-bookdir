import { Request, Response, Router } from "express";
import {
  addBook,
  deleteBook,
  editBook,
  searchBook,
  viewBook,
} from "../controllers/booksController";

const bookRouter = Router();
bookRouter.post("/", addBook);
bookRouter.delete("/delete/:id", deleteBook);
bookRouter.get("/view/:id", viewBook);
bookRouter.put("/edit/:id", editBook);
bookRouter.post("/search", searchBook);

export default bookRouter;
