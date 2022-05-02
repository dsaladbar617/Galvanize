var longestRun = function(string) {
  // TODO: Your code here!
  if (string.length === 0) {
    return;
  } else {
    let stringArr = string.split("");
  console.log(stringArr)
  let repeatedChar = [-1,0];
  let longestMatch = [0,0];
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === stringArr[i + 1]) {
      if (repeatedChar[0] === -1) {
        repeatedChar[0] = i;
      }
    } else if (repeatedChar[0] !== "none") {
        repeatedChar[1] = i;
        if (repeatedChar[1] - repeatedChar[0] > longestMatch[1] - longestMatch[0]) {
          longestMatch[0] = repeatedChar[0];
          longestMatch[1] = repeatedChar [1];
          repeatedChar[0] = -1;
          repeatedChar[1] = 0;
        } else {
          repeatedChar[0] = -1;
          repeatedChar[1] = 0;
        }
    }
  }
   return longestMatch;
  }

};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function(len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

let word = "a" * 2000;

console.log(word);

console.log(longestRun(word));