import { Request, Response, Router } from "express";
import { addBook, deleteBook } from "../controllers/booksController";

const bookRouter = Router();
bookRouter.post("/", addBook);
bookRouter.delete("/delete/:id", deleteBook);

export default bookRouter;
