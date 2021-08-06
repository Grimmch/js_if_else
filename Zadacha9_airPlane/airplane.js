var weight = prompt("Write weight of cargo");
var volumoOfTank = prompt("Write volume of the tank");
var amstCromwel = prompt("Write distance from A to C");
var CromwelBrucel = prompt("Write distance from C to B");
var distanceFull = amstCromwel + CromwelBrucel;
const KM = 100;
if (weight < 1) {
    fuelNeed = 25;
}
else if (weight < 2 && weight >= 1) {
    fuelNeed = 30;
}
else if (weight < 3 && weight >= 2) {
    fuelNeed = 35;
}
else if (weight < 4 && weight >= 3) {
    fuelNeed = 42;
}
else if (weight < 5 && weight >= 4) {
    fuelNeed = 50;
}
else alert("Airplane can take cargo 5 and more ton");
fuelConsumption = distanceFull / (volumoOfTank * KM / fuelNeed);

if (fuelConsumption >= 1) {
    alert("No need refueling, you can fly from A to B");
}
else if (fuelConsumption < 1 && fuelConsumption >= amstCromwel && fuelConsumption >= CromwelBrucel) {
    alert("you need to refueling at C to fly");
}
else alert("airplane can fly so far");
