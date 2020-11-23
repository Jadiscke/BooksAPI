import { Application } from "express";
import basicRoutes from "./basic.routes";



export default function (app: Application) {
  app.use('/api', [basicRoutes])
}