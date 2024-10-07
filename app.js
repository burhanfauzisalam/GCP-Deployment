const express = require("express");
const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello", (req, res) => {
  res.send("This is trial of GCP program!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
