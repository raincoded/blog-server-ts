import { sequelize } from "./db";
import "./models/user";
sequelize.sync().then(() => {
    console.log("所有模型同步完成");
});
