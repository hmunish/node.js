const http = require("http");
const fs = require("fs");

console.log("Hello world");

const sum = (a, b) => a + b;
console.log(sum(5, 7)); // returns 12

const Student = {
  fullName: "Munish",
  age: 25,
  greet() {
    console.log(`Hi, my name is ${this.fullName}`);
  },
};

Student.greet();

let fruits = ["apple", "oranges", " ", "mango", " ", "lemon"];
fruits = fruits.map((e) => {
  if (e === " ") return "empty string";
  else return e;
});

console.log(fruits);

// Start server

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body><h1>Welcome home</h1></body></html>");
    return res.end();
  } else if (url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body><h1>Welcome to About us page</h1></body></html>");
    return res.end();
  } else if (url === "/node") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><body><h1>Welcome to my node js project</h1></body></html>"
    );
    return res.end();
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  } else {
    const message = fs.readFileSync("message.txt");
    res.setHeader("Content-Type", "text/html");
    res.write(
      `<html><body><form method='POST' action='/message'><h3>${message}</h3><input type='text' name='message'><button type='submit'>Submit</button></form></body></html>`
    );
    return res.end();
  }
});

server.listen(3000);
