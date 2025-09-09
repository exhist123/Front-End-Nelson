const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.getAttribute("data-value");

    if (value === "AC") {
      display.value = "";
    } else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        // Replace functions with Math equivalents
        let expression = display.value
          .replace(/sin\(/g, "Math.sin(")
          .replace(/cos\(/g, "Math.cos(")
          .replace(/tan\(/g, "Math.tan(")
          .replace(/log\(/g, "Math.log10(")
          .replace(/exp\(/g, "Math.exp(")
          .replace(/√\(/g, "Math.sqrt(")
          .replace(/π/g, "Math.PI")
          .replace(/\^/g, "**");

        display.value = eval(expression);
      } catch {
        display.value = "Error";
      }
    } else {
      //  For sin, cos, tan, log, exp, sqrt → auto insert () and put cursor inside
      if (["sin(", "cos(", "tan(", "log(", "exp(", "√("].includes(value)) {
        // Insert function with brackets
        display.value += value + ")";
        // Put cursor inside brackets
        let pos = display.value.length - 1;
        display.focus();
        display.setSelectionRange(pos, pos);
      } else {
        display.value += value;
      }
    }
  });
});

