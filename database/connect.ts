// imports
import { Sequelize } from "sequelize";

const db: Sequelize = new Sequelize("node", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
