const express = require("express");
const app = express();
app.get("/", (_, res) => {
  res.send("root");
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
