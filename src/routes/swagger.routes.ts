import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../api.json";

const routes = Router();

const PATH = "/api-docs";

routes.use(PATH, swaggerUi.serve);
routes.get(PATH, swaggerUi.setup(swaggerDocument));

export default routes;
