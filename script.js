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
  res.setHeader("Content-Type", "text/html");
  res.write("<html><body><h1>Hello from the server</h1></body></html>");
  res.end();
});

server.listen(3000);
