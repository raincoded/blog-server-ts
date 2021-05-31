import cors from "cors";
import express from "express";
import { resolve } from "path";
import { cwd } from "process";
import { config } from "./types/config";
import cookieParser from "cookie-parser";
import "./sql/index";
import "./service/index"
const app = express();
app.use(cors());
app.use(express.static(resolve(cwd(), config.staticPath)));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser("nihao"));
app.listen(config.port, function () {
    console.log("端口为：" + config.port);
});
