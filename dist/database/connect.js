"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("node", "root", "", {
    host: "localhost",
    dialect: "mysql",
});
exports.default = db;
//# sourceMappingURL=connect.js.map