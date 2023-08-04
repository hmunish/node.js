const http = require("http");
// const routes = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
const chatRoutes = require("./routes/chat.js");
const contactRoutes = require("./routes/contact.js");
const path = require("path");
const rootDir = require("./util/path.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);
app.use("/chat", chatRoutes);
app.use("/contact", contactRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// Start server
app.listen(3000);
