var firstNumber = parseInt(prompt(" Please write first number "));
var secondNumber = parseInt(prompt(" Please write second number "));
var thirdNumber = parseInt(prompt(" Please write third number "));
var discriminar = (Math.pow(secondNumber, 2)) - (4 * firstNumber * thirdNumber);
if (discriminar == 0) {
    let disEquation = ((-1) * secondNumber) / (2 * firstNumber)
    alert("Equation = " + disEquation.toFixed(2));
}
else if (discriminar > 0) {
    let disEquationOne = ((-1) * secondNumber + (Math.sqrt(discriminar))) / (2 * firstNumber)
    let disEquationTwo = ((-1) * secondNumber - (Math.sqrt(discriminar))) / (2 * firstNumber)
    alert("Equation has two solutions = " + disEquationOne.toFixed(2) + " and " + disEquationTwo.toFixed(2));
}
else {
    alert("discriminar < 0 , no solution")
}