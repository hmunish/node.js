const http = require("http");
// const routes = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/products" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add product</button></form>'
  );
});

app.post("/products", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use((req, res, next) => {
  res.send("<h1>Hello from Express.js</h1>");
});

// Start server
app.listen(3000);
