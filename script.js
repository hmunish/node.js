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
