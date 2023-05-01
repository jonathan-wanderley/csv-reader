import express from "express";
import cors from "cors";

import "dotenv/config";
import "reflect-metadata";
import "./database";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.listen(port, () => {
  `Running sucessfully in port ${port}`
});
