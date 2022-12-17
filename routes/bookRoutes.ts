import { Request, Response, Router } from "express";
import { addBook } from "../controllers/booksController";

const bookRouter = Router();
bookRouter.post("/", addBook);

export default bookRouter;
