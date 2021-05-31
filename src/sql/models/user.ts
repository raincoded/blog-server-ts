import { sequelize } from "../db";
import { DataTypes } from "sequelize";
export default sequelize.define(
    "user",
    {
        name: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING(),
            allowNull: true,
        },
        power: {
            type: DataTypes.INTEGER(),
            allowNull: false,
        },
    },
    {
        paranoid: true,
    }
);