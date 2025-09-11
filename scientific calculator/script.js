const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let lastAnswer = 0; // store ANS

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.getAttribute("data-value");

    if (value === "AC") {
      display.value = "";
    } else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        // Replace functions with Math equivalents (degrees → radians for sin, cos, tan)
        let expression = display.value
          .replace(/sin\(/g, "Math.sin(Math.PI/180*")
          .replace(/cos\(/g, "Math.cos(Math.PI/180*")
          .replace(/tan\(/g, "Math.tan(Math.PI/180*")
          .replace(/log\(/g, "Math.log10(")
          .replace(/exp\(/g, "Math.exp(")
          .replace(/√\(/g, "Math.sqrt(")
          .replace(/π/g, "Math.PI")
          .replace(/\^/g, "**");

        let result = eval(expression);

        // Fix floating point issues (e.g., 0.499999999 → 0.5)
        result = Math.round(result * 1e10) / 1e10;

        display.value = result;
        lastAnswer = result; // store for ANS
      } catch {
        display.value = "Error";
      }
    } else if (value === "ANS") {
      display.value += lastAnswer;
    } else if (value === "+/-") {
      if (display.value) {
        if (display.value.startsWith("-")) {
          display.value = display.value.substring(1);
        } else {
          display.value = "-" + display.value;
        }
      }
    } else {
      display.value += value;
    }
  });
});
