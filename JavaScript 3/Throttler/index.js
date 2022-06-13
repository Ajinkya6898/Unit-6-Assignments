console.log("hi");

const throtter = (func, buffer) => {
  let time = 0;

  return (...args) => {
    const cuurent = Date.now();

    if (cuurent - time > buffer) {
      func(...args);
      time = cuurent;
    }
  };
};

var count = 1;
document.getElementById("btn").addEventListener(
  "click",
  throtter((elem) => {
    console.log(`Count ${count}`);
    count++;
  }, 5000)
);
