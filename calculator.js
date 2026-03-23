let expression = "";
let lastAnswer = 0;

const exprDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");

function updateDisplay() {
    exprDisplay.textContent = expression;
}

function evaluateExpression(expr) {
    return Function('"use strict"; return (' + expr + ')')();
}

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {

        const value = btn.dataset.value;
        const func = btn.dataset.func;

        if (value) {
            expression += value;
            updateDisplay();
        }

        if (func === "clear") {
            expression = "";
            resultDisplay.textContent = "0";
            updateDisplay();
        }

        if (func === "delete") {
            expression = expression.slice(0, -1);
            updateDisplay();
        }

        if (func === "equal") {
            try {
                const result = evaluateExpression(expression);
                resultDisplay.textContent = result;
                lastAnswer = result;
                expression = result.toString();
            } catch {
                resultDisplay.textContent = "Error";
            }
        }

        if (func === "ans") {
            expression += lastAnswer;
            updateDisplay();
        }
    });
});
