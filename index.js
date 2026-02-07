const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.innerText;

        if (value === "AC") {
            expression = "";
            inputBox.value = "0";
        } 
        else if (value === "DEL") {
            expression = expression.slice(0, -1);
            inputBox.value = expression || "0";
        } 
        else if (value === "=") {
            try {
                expression = eval(expression).toString();
                inputBox.value = expression;
            } catch {
                inputBox.value = "Error";
                expression = "";
            }
        } 
        else if (value === "%") {
            if (expression !== "") {
                expression = (Number(expression) / 100).toString();
                inputBox.value = expression;
            }
        } 
        else {
            if (inputBox.value === "0") {
                expression = value;
            } else {
                expression += value;
            }
            inputBox.value = expression;
        }
    });
});
