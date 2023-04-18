const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.send("root");
});

app.get("/go", (_, res) => {
  const redirectToUrl = "https://youtu.be/dQw4w9WgXcQ";
  res.redirect(redirectToUrl);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
