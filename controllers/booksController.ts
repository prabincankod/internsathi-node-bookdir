import { Request, Response } from "express";
import { prismaClient } from "../prisma/prisma";

const addBook = async (req: Request, res: Response) => {
  try {
    const { title, author, description } = req.body;
    const book = await prismaClient.book.create({
      data: {
        title,
        author,
        description,
      },
    });
    res.status(200).json({ message: "Book added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    const book = await prismaClient.book.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const editBook = async (req: Request, res: Response) => {
  try {
    const book = await prismaClient.book.update({
      where: { id: parseInt(req.params.id) },
      data: {
        title: req?.body?.title,
        author: req?.body?.author,
        description: req?.body?.description,
      },
    });
    res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const searchBook = async (req: Request, res: Response) => {
  try {
    console.log(req?.query?.s);
    const books = await prismaClient.book.findMany({
      where: {
        title: {
          //@ts-ignore
          contains: req?.query?.s,
        },
      },
    });
    res.status(200).send(books);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export { addBook, deleteBook, editBook, searchBook };
