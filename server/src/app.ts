// eslint-disable-next-line no-unused-vars
import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

class App {
  server: Express;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    // this.server.use(
    //   '/files',
    //   express.static(resolve(__dirname, '..', 'tmp', 'uploads'))
    // );
  }

  routes() {
    this.server.use(routes);
  }
}
export default new App().server;
