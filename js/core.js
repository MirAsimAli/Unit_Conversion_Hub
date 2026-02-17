let expression = "";

function press(value) {
    expression += value;
    document.getElementById("calcDisplay").value = expression;
}

function calculateResult() {
    try {
        expression = eval(expression).toString();
        document.getElementById("calcDisplay").value = expression;
    } catch {
        document.getElementById("calcDisplay").value = "Error";
        expression = "";
    }
}

function clearDisplay() {
    expression = "";
    document.getElementById("calcDisplay").value = "";
}
