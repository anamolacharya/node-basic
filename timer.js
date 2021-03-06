//this is the timer implementation in percentage using setIntercal
const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Waiting ... ${p}% `);
};

console.log(`Setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
  clearImmediate(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("Done!!");
};

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);
