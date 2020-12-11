import { Router } from "express";

const routes = Router();

const PATH = "/";

routes.get(`${PATH}info`, (req, res) => {
  res.json({
    status: "OK"
  });
});


export default routes;