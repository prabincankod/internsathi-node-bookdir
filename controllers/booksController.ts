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

export { addBook };
