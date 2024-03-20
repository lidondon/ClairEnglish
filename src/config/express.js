import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import index from "../server/routes/index_route";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (request, response) => response.render("index"));
app.use("/api", index);

export default app;
