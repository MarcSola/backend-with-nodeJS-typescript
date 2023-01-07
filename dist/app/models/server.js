"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
// general imports
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// database import
const connect_1 = __importDefault(require("../../database/connect"));
// route imports
const users_routes_1 = __importDefault(require("../routes/users.routes"));
class Server {
    constructor() {
        // properties in apiRoutes object define the root
        // route for their corresponding api routes
        this.apiRoutes = {
            users: "/api/users",
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
        this.dbConnect();
        // middlewares always before routes
        this.setMiddlewares();
        this.setRoutes();
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // authentication for the database
                yield connect_1.default.authenticate();
                console.log("Database online");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    setMiddlewares() {
        // work with the Cross Domain
        this.app.use((0, cors_1.default)());
        // reading of the body
        this.app.use(express_1.default.json());
        // WARNING!! public folder must be created at root level
        this.app.use(express_1.default.static("public"));
    }
    run() {
        // server start
        this.app.listen(this.port, () => {
            console.log(`server started properly and is running on port ${this.port}`);
        });
    }
    setRoutes() {
        // set api routes for the server
        // use this.app.use(api_root_string, router_with_api_routes)
        // for each set of router_with_api_routes
        // users apis
        this.app.use(this.apiRoutes.users, users_routes_1.default);
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map