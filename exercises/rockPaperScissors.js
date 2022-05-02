var rockPaperScissors = (num) => {
  // let options = [['rock'], ['paper'], ['scissors']];
  // let ansArr = [];
  // const getPlays = () => {


  //   let entry = [];
  //   while (entry.length < num) {
  //     let count = 0;
  //     entry.push(options[count]);
  //   }
  //   ansArr.push(entry)
  //   return ansArr;
  // }
  // return getPlays();
  let ansArr = [];
  let options = [['rock'], ['paper'], ['scissors']];
  let count = 0;
  if (num === 0) {
    return options
  }

  let rPlay = options[0].map(item => [item, 'rock']);
  let pPlay = options[1].map(item => [item, 'paper']);
  let sPlay = options[2].map(item => [item, 'scissors']);

  return ansArr.concat(rPlay, pPlay, sPlay);
};

console.log(rockPaperScissors(3));