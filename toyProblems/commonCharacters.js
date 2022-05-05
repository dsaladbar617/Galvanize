// var commonCharacters = function (string1, string2) {
//   let charInCommon = "";
//   // iterate over the characters of string1
//   for (let i = 0; i < string1.length; i++) {
//     // iterate over the characters of string2
//     for (let j = 0; j < string2.length; j++) {

//       // if string1[i] === string2[j] and not in the result string add to result string keeping track of characters in common
//       if (string1[i] === string2[j] && charInCommon.indexOf(string1[i]) < 0 && string1[i] !== " ") {
//         charInCommon += string1[i];

//         //console.log(charInCommon.indexOf(string1[i]));
//       }
//     }
//   }
//   // return the string that kept track of the characters in common
//   return charInCommon;

// };

// console.log(commonCharacters('all boys love fudge', 'boys all love fudge'));


// var commonCharacters = function (...arguments) {
//   let args = [...arguments];
// //  let charInCommon = args[0].split("");
//   let result = [];

//   args[0].split("").forEach((firstLetter) => {
//     for (let i = 1; i < args.length; i++) {
//       args[i].split('').forEach((item) => {
//         if (firstLetter === item && !result.includes(firstLetter) && firstLetter !== " ") {
//           result.push(firstLetter);
//         }
//       })
//     }
//   })
//   return result;
// };

var commonCharacters = function (...arguments) {
  let args = [...arguments];
//  let charInCommon = args[0].split("");
  let result = args[0].split("");


  // args[0].split("").forEach((firstLetter) => {
  //   for (let i = 1; i < args.length; i++) {
  //     args[i].split('').forEach((item) => {
  //       if (firstLetter === item && !result.includes(firstLetter) && firstLetter !== " ") {
  //         result.push(firstLetter);
  //       }
  //     })
  //   }
  // })
  return result;
};

console.log(commonCharacters('all boys love fudge', 'boys all love fudge', 'a'));