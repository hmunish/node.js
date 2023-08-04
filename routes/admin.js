const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/products" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add product</button></form>'
  );
});

router.post("/products", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
