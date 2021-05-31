"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const process_1 = require("process");
const config_1 = require("./types/config");
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.static(path_1.resolve(process_1.cwd(), config_1.config.staticPath)));
app.listen(config_1.config.port, function () {
    console.log("端口为：" + config_1.config.port);
});
require("./sql/index");
