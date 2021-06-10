//process will help to print out in same line while console log will print in each line
// process.stdout.write("Hello");
// process.stdout.write(" world \n\n \n");

const questions = [
  "What is your name?",
  "Where are you from?",
  "What is your profession?",
];

const ask = (i = 0) => {
  process.stdout.write(`\n \n \n ${questions[i]}`);
  process.stdout.write(` > `);
};

ask();
