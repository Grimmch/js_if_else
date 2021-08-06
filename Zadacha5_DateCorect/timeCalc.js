let day = prompt("write day");
let month = prompt("Write month");
let year = prompt("Write year");
let visokosnRullOne = year % 4;
let visokosnRullTwo = year % 400;
let notVisonosn = year % 100;
let monthWord = null;
let daysInMonth = 0;
if (month == 4 || month == 6 || month == 9 || month == 11) {
    daysInMonth = 30;
}
else if (month == 2 && visokosnRullOne == 0 && visokosnRullTwo == 0) {
    daysInMonth = 29;
}
else if (month == 2 && visokosnRullOne != 0 && notVisonosn == 0 || month == 2) {
    daysInMonth = 28;
}
else daysInMonth = 31;
if (month == 1) {
    monthWord = " January "
}
else if (month == 2) {
    monthWord = " February "
}
else if (month == 3) {
    monthWord = " March  "
}

else if (month == 4) {
    monthWord = " April  "
}

else if (month == 5) {
    monthWord = " May  "
}

else if (month == 6) {
    monthWord = " June  "
}

else if (month == 7) {
    monthWord = " July  "
}

else if (month == 8) {
    monthWord = " August  "
}

else if (month == 9) {
    monthWord = " September  "
}

else if (month == 10) {
    monthWord = " October  "
}

else if (month == 11) {
    monthWord = " November  "
}
else if (month == 12) {
    monthWord = " December  "
}

if (monthWord != null && day > 0 && day <= daysInMonth && month <= 12 && month > 0) {
    alert(day + monthWord + " " + year)
} else
    alert("writed wrong date")