"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = require("./app/models/server");
// get dotenv config
dotenv_1.default.config();
// initialize server object
const server = new server_1.Server();
// run server
server.run();
//# sourceMappingURL=app.js.map