const http = require("http");
const routes = require("./routes");

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

const server = http.createServer(routes.handler);

server.listen(3000);
