const express = require("express");
const app = express();
const routes = require("./routes");

app.use(routes);

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});
