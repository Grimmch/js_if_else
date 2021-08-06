/*questionOne*/
var yourScore = 0;
var maxPoint = 12;
var NumberOfQuestion = 10;
var num = 1;
let questionOne = prompt("Choice right answer\n 2+2= : \n 1. 4\n 2. 5\n 3. 3\n 4. None");

if (questionOne == 1) {
    yourScore += num;
}
/*questionTwo*/
let questionTwo = prompt("Choice right answer\n max nubmer : \n 1. 4\n 2. 5\n 3. 3\n 4. None");
if (questionTwo == 2) {
    yourScore += num;
}
/*questionThree*/
let questionThree = prompt("Choice right answer\n 6-4= : \n 1. 4\n 2. 5\n 3. 3\n 4. None");

if (questionThree == 4) {
    yourScore += num;
}
/*questionOfour*/
let questionOfour = prompt("Choice right answer\n 3*2-1= :\n 1. 4\n 2. 5\n 3. 3\n 4. None");

if (questionOfour == 2) {
    yourScore += num;
}
/*questionfive*/
let questionfive = prompt("Choice right answer\n min nubmer :\n 1. 4\n 2. 5\n 3. 0\n 4. None");

if (questionfive == 3) {
    yourScore += num;
}

/*questionSix*/
let questionSix = prompt("Choice right answer\n 11*3= :\n 1. 50\n 2. 5\n 3. 33\n 4. None");

if (questionSix == 3) {
    yourScore += num;
}
/*questionSeven*/
let questionSeven = prompt("Choice right answer\n 50*100/20-3 :\n 1. 1997\n 2. 2997\n 3. 247\n 4. 297");
if (questionSeven == 3) {
    yourScore += num;
}
/*questionEight*/
let questionEight = prompt("Choice right answer\n 2*2= :\n 1. 4\n 2. 5\n 3. 3\n 4. None");
if (questionEight == 1) {
    yourScore += num;
}
/*questionNine*/
let questionNine = prompt("Choice right answer\n color on sky :\n 1. blue\n 2. dark\n 3. white\n 4. dark in night blue at day");
if (questionNine == 4) {
    yourScore += num;
}

/*questionTen*/
let questionTen = prompt("Choice right answer 2*40= :\n 1. 40\n 2. 60\n 3. 35\n 4. None");
if (questionTen == 4) {
    yourScore += num;
}

let result = yourScore * maxPoint / NumberOfQuestion;
alert("You get " + result + "points for the test");
