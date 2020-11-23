import express from "express";
import cors from "cors";
import setRoutes from "./routes/index.routes";
import "./env";


class App {
  app: express.Application;

  constructor() {
    this.app = express();
    this.init();
    this.routes();
  }

  init() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  listen(PORT: String) {
    this.app.listen(PORT);
  }
  routes() {
    setRoutes(this.app);
  }
}

export default new App();