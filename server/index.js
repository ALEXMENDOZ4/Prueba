import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(indexRoutes);
app.use(usersRoutes);

app.listen(PORT);
console.log("server " + PORT);
