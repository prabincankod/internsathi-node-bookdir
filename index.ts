import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { prismaClient } from "./prisma/prisma";

dotenv.config();

const port = process.env.PORT;
const app: Express = express();

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "alive" });
});

app.listen(port, () => {
  console.log(`💻[server]: Server is running at http://localhost:${port}`);
});
