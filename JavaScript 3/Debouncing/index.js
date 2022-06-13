var button = document.getElementById("input");

const debounce = (func, time) => {
  var Timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(Timer);
    Timer = setTimeout(() => func.apply(context, args), time);
  };
};
button.addEventListener(
  "click",
  debounce(function () {
    alert("Hello debouncing is applied");
    console.log(
      "This alert and this console.log statement wiil be printed after 5 sec no matter how many times you click on the button "
    );
  }, 5000)
);
