const mongose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 8080;
const app = require("./App");

mongose
  .connect(process.env.DATABASE)
  .then(() => console.log("Database connected"));

app.listen(port, () => {
  console.log("server is running");
});
