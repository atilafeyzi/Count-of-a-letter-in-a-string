// Challenge: Wtite a function to find the count of a letter in a string

// The first method 1️⃣

// const countLetter = (str, letter) => {
// str = str.toLowerCase();
// letter = letter.toLowerCase();
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       counter++;
//     }
//   }
//   return counter;
// };

// const result = countLetter("Hello World", "l");
// console.log(result);

// The second method 2️⃣ (Function Declaration)

// function countLetter (str, letter) {
// str = str.toLowerCase();
// letter = letter.toLowerCase();
//     let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       counter++;
//     }
//   }
//   return counter;
// }

// const result = countLetter("Hello World", "l");
// console.log(result);

// The third method 3️⃣ (IIFE)

(function (str, letter) {
  str = str.toLowerCase();
  letter = letter.toLowerCase();
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      counter++;
    }
  }
  console.log(counter);
})("Hello World", "l");
