const express = require("express");
const app = express();
// Import dotenv
require("dotenv").config();

const port = process.env.PORT || 2000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send(process.env.hello);
});

app.get("/hello", (req, res) => {
  res.send("This is trial of GCP program!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
