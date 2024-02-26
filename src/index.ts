import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;
console.log(`port:${port}`);
console.log("hello!!!!");

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server 1 dev  ");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
