import express from "express";
import path from "path";
import mongoose from "mongoose";
import * as bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import Promise from "bluebird";

import configs from "./configs";

import auth from "./routes/auth";
import users from "./routes/users";
import members from "./routes/members";

const { PORT, DB } = configs;
const app = express();
app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());
mongoose.Promise = Promise;
mongoose.connect(DB.url);

app.use("/auth", auth);
app.use("/users", users);
app.use("/members", members);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
