const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-products.html"));
});

router.post("/products", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
