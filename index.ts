import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { prismaClient } from "./prisma/prisma";
import bookRouter from "./routes/bookRoutes";

dotenv.config();

const port = process.env.PORT;
const app: Express = express();
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ message: "alive" });
});

app.use("/books", bookRouter);
app.listen(port, () => {
  console.log(`💻[server]: Server is running at http://localhost:${port}`);
});
