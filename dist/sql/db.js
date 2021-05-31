"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const types_1 = require("sequelize/types");
exports.sequelize = new types_1.Sequelize("blog", "root", "mysql", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});
