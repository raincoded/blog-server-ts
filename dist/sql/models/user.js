"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("sequelize/types");
const db_1 = require("../db");
exports.default = db_1.sequelize.define("user", {
    name: {
        type: types_1.DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: types_1.DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: types_1.DataTypes.STRING,
        allowNull: true,
    },
    power: {
        type: types_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    paranoid: true,
});
