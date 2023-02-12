// Obtém os elementos da calculadora
const display = document.getElementById("display");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");


const numButtons = document.getElementsByClassName("num");
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", function() {
    display.value += numButtons[i].innerHTML;
  });
}

const funcButtons = document.getElementsByClassName("func");
for (let i = 0; i < funcButtons.length; i++) {
  funcButtons[i].addEventListener("click", function() {
    const func = funcButtons[i].innerHTML;
    if (func === "sin" || func === "cos" || func === "tan") {
      display.value += func + "(";
    } else {
      display.value += func;
    }
  });
}


clearButton.addEventListener("click", function() {
  display.value = "";
});


equalButton.addEventListener("click", function() {
  display.value = eval(display.value);
});
