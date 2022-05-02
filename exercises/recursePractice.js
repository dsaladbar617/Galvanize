const testCase = 'hello, world';

const reverseStr = (str) => {
  console.log(str);
  if (str.length === 1) {
    return str;
  }

  return (str.slice(str.length - 1) + reverseStr(str.slice(0, str.length - 1)));

}

console.log(reverseStr(testCase));