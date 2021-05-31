import { Sequelize } from "sequelize/index";

export const sequelize = new Sequelize("blog", "root", "2gedns", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});
