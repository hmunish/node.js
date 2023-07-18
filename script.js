const http = require("http");

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
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body><h1>Default</h1></body></html>");
    return res.end();
  }
});

server.listen(3000);
