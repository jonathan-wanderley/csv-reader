import express from "express";
import cors from "cors";
import "dotenv/config";

const server = express();

const port = process.env.PORT || 3000;

server.use(cors());

server.listen(port, () => {
    `Server running on port ${port}`
});
