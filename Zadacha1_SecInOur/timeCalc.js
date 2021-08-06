let secondsPick = prompt("Enter number of seconds");
let hours = secondsPick / 3600;
let hoursFul = parseInt(hours);
let lastOf = secondsPick % 3600;
let minuteWithDote = ((secondsPick / 60) - (hoursFul * 60));
let minute = parseInt(minuteWithDote);

alert(secondsPick + " seconds it`s " + hoursFul + ' hours and ' + minute + " whole minutes");
/*

If you wana get creative answear for any tipe of custions you can chose this method

if (hoursFul < 1 && lastOf == 0) {
    alert('You write 0 seconds');
}
else if (hoursFul < 1 && lastOf > 0 && secondsPick < 60 && secondsPick > 0) {
    alert(" You write less then 1 minute ");
}
else if (hoursFul < 1 && lastOf > 0) {
    alert(secondsPick + " seconds it`s " + minute + ' whole minutes');
}
else if (hoursFul >= 1 && lastOf == 0) {
    alert(secondsPick + " seconds it`s " + hoursFul + ' hours');
}
else {
    alert(secondsPick + " seconds it`s " + hoursFul + ' hours and ' + minute + "whole minutes");
}*/