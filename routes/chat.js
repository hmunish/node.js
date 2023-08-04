const path = require("path");
const fs = require("fs");
const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  function addUsernameToLocalStorage(e) {
    e.preventDefault();
    localStorage.setItem("username", e.target.username.value);
    e.submit();
  }
  res.setHeader("Content-Type", "text/html");
  res.send(
    `
    <form action="/chat/messenger"  method="GET"><input name="username" placeholder="Username"><button type="submit">Send</button></form>
    <script>
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem("username", e.target.username.value);
        e.target.submit();
    })
</script>
    `
  );
});

router.get("/messenger", (req, res, next) => {
  const message = fs.readFileSync("message.txt");
  res.setHeader("Content-Type", "text/html");
  res.send(
    `<p>${message}</p> <form action="/chat/record" method="POST"><input name="message" placeholder="Message"><input type="text" hidden value="" name="username"><button type="submit">Send</button></form>
    <script>
        document.querySelector('input[name ="username"]').value = localStorage.getItem('username');
    </script>
    `
  );
});

router.post("/record", (req, res) => {
  const newMessage = req.body.username + ": " + req.body.message + "<br>";
  const oldMessage = fs.readFileSync("message.txt");
  fs.writeFileSync("message.txt", oldMessage + " " + newMessage);
  res.redirect("/chat/messenger");
});

module.exports = router;
