import { Request, Response, Router } from "express";
import { addBook, deleteBook, editBook } from "../controllers/booksController";

const bookRouter = Router();
bookRouter.post("/", addBook);
bookRouter.delete("/delete/:id", deleteBook);
bookRouter.put("/edit/:id", editBook);

export default bookRouter;
