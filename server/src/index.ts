import express from "express";
import cors from "cors";

import "dotenv/config";
import "reflect-metadata";
//import "./database";
import { routes } from "./routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(routes);

app.listen(port, () => {
  `Running sucessfully in port ${port}`
});
