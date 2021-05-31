"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
require("./user");
db_1.sequelize.sync().then(() => {
    console.log("所有模型同步完成");
});
