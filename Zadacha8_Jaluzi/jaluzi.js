const CM_PER_METR = 100;
var width = prompt("write width");
var height = prompt("Write height");
var material = prompt("choose material \n 1. Platic - 200 hrv/m²\n 1. Textile - 250 hrv/m²\n 1. Aluminum - 350 hrv/m² ");
var area = (width / CM_PER_METR) * (height / CM_PER_METR);
if (material == 1) {
    var materialPrice = 200;
}
else if (material == 2) {
    var materialPrice = 250;
}
else if (material == 3) {
    var materialPrice = 350;
}
var fullPrice = area * materialPrice;
alert("Price for m²: " + materialPrice + " hrn \nMaterial area: " + area + " m² \nTotal Price: " + fullPrice + " hrn ")

