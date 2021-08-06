var firstNumber = parseInt(prompt(" Please write first number "));
var secondNumber = parseInt(prompt(" Please write second number "));
if (firstNumber == 0) {
    alert("The equation has no solution ");
}
else if (firstNumber != 0 && secondNumber == 0) {
    alert("Equation = 0");
}
else {
    let lineEquation = secondNumber * (-1) / firstNumber
    alert("Equation = " + lineEquation);
}