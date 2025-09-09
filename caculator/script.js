const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Defining the function to calculate based on button click
const calculate = (btnValue) => {
  display.focus();

  if (btnValue === "=" && output !== "") {
    // Replace "%" with "/100" before evaluating
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    // Remove the last character from the output
    output = output.toString().slice(0, -1);
  } else {
    // Prevent starting with a special character
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
};

// Add event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
