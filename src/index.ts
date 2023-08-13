import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express, { Application } from "express";
const app: Application = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;
const prisma = new PrismaClient();
async function main() {
  try {
    app.listen(port, () => {
      console.log(`server is running ${port}`);
    });
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();
