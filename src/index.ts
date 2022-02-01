import express from "express";
import swagger from "swagger-ui-express";

import docs from "./docs.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/docs", swagger.serve, swagger.setup(docs));
export { app };
