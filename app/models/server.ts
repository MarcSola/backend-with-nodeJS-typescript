// imports
import express, { Application } from "express";

export class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";
  }

  // server start method
  public run(): void {
    this.app.listen(this.port, () => {
      console.log(
        `server started properly and is running on port ${this.port}`
      );
    });
  }
}
