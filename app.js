const express = require("express");
const app = express();
const cors = require("cors");
const postRouter = require("./routers/v1/post.router");
const userRouter = require("./routers/v1/user.router");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/post", postRouter);

module.exports = app;
