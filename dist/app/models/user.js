"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// general imports
const sequelize_1 = require("sequelize");
// import database
const connect_1 = __importDefault(require("../../database/connect"));
// create user model
const User = connect_1.default.define("user", {
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
exports.default = User;
//# sourceMappingURL=user.js.map