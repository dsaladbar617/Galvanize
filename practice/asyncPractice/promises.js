let areYouCoding = true;

// let checkInOnProgress = progress => {
//   return new Promise((resolve, reject) => {
//     if (!areYouCoding) {
//       reject("I am not learning to write code");
//     } else {
//       resolve("I am learning to write code");
//     }
//   })
// }

// let learnToWriteCode = checkInOnProgress(areYouCoding);
// learnToWriteCode.then(success => console.log(success), failure => console.log(failure));

let learnToWriteCode = new Promise((resolve, reject) => {
  if (!areYouCoding) {
    reject("I am not learning to write code");
  } else {
    resolve("I am learning to write code");
  }
})


console.log(learnToWriteCode)