// imports
import dotenv from "dotenv";
import { Server } from "./app/models/server";

// get dotenv config
dotenv.config();

// initialize server object
const server: Server = new Server();

// run server
server.run();
