// function x() {
//   const a = 10;
// }

// var xyz = 30;

// x(); // function execution context is created
// // data structure -> memory heap

// var x = function () {
//   console.log("anonymous function");
// };

// in ES6

// **************************************************************

// const obj = {
//   fn: function () {
//     console.log(this);
//   },
//   fn2: () => {
//     console.log(this);
//   },
// };

// obj.fn();
// obj.fn2();

// **************************************************************

const person = {
  name: "john",
  print: function () {
    console.log(this);
  },
};

const person2 = {
  name: "vraj",
  print: () => {
    console.log(this);
  },
};

function x() {
  console.log(this);
}

// x();
// x.call(person);
person.print();
person.print.call();
person2.print();
