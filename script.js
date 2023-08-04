const http = require("http");
// const routes = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

// Start server
app.listen(3000);
