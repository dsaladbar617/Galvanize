let areYouCoding = false;

let checkInOnProgress = progress => {
  return new Promise((resolve, reject) => {
    if (!areYouCoding) {
      reject(false);
    } else {
      resolve(true);
    }
  })
}

let learnToWriteCode = checkInOnProgress(areYouCoding);
learnToWriteCode.then(() => console.log("I am learning to write code"))
.catch(() => console.error("I am not learning to write code"));


// let learnToWriteCode = new Promise((resolve, reject) => {
//   if (!areYouCoding) {
//     reject("I am not learning to write code");
//   } else {
//     resolve("I am learning to write code");
//   }
// })


// console.log(learnToWriteCode)