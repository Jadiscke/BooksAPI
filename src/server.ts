import app from "./app";
import "./env";

const server = app.listen(process.env.PORT);

export default server;
