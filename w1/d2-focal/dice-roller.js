const args = process.argv;
let rolls = args[2];

const diceRollAnswer = function(num) {

  return Math.ceil(Math.random() * 6);
}
let answers = [];
for (let i = 0; i < rolls; i++){
  answers.push(diceRollAnswer())
}
// console.log(answers);
console.log(`Rolled ${rolls} dice: ${answers}`)

// console.log("hello", rolls);
// let random = Math.random();
// console.log(random);
// console.log(Math.ceil(random * 6));
//want to return: "Rolled 3 dice: _, _, _"