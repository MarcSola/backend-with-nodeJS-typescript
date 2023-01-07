// general imports
import express, { Application } from "express";
import cors from "cors";
import path from "path";

// route imports
import userRoutes from "../routes/users.routes";

export class Server {
  private app: Application;
  private port: string;

  // properties in apiRoutes object define the root
  // route for their corresponding api routes
  private apiRoutes: any = {
    users: "/api/users",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    // middlewares always before routes
    this.setMiddlewares();
    this.setRoutes();
  }

  public setMiddlewares(): void {
    // work with the Cross Domain
    this.app.use(cors());

    // reading of the body
    this.app.use(express.json());

    // WARNING!! public folder must be created at root level
    this.app.use(express.static("public"));
  }

  public run(): void {
    // server start
    this.app.listen(this.port, () => {
      console.log(
        `server started properly and is running on port ${this.port}`
      );
    });
  }

  public setRoutes(): void {
    // set api routes for the server
    // use this.app.use(api_root_string, router_with_api_routes)
    // for each set of router_with_api_routes

    // users apis
    this.app.use(this.apiRoutes.users, userRoutes);
  }
}
