import { Application } from "express";
import basicRoutes from "./basic.routes";
import swaggerRoute from "./swagger.routes";



export default function (app: Application) {
  app.use('/api', [basicRoutes, swaggerRoute])
}