let heightCeiling = prompt(" Please write height of ceiling in meters ");
let widthRoom = prompt(" Please write width of room in meters ");
let lenghtRoom = prompt(" Please write lenght of room in meters ");
let numberOfWindows = prompt(" Please write Number of windows ");
let widthOfWindow = prompt(" Please write width of window in centimeters");
let heightOfWindow = prompt(" Please write height of window in centimeters ");
let heightOfDor = prompt(" Please write height of dor in centimeters");
let widthOfDor = prompt(" Please write width of dor in centimeters");
let numberOfDor = prompt(" Please write Number of dor ");
let oneRolls = prompt(" Please write lenght one rolls of wallpaper in meters ");;
const CM_PER_METR = 100;
let roomPerimetr = (widthRoom + lenghtRoom) * 2;
let areaForWallpaper = roomPerimetr * heightCeiling;
areaForWallpaper.toFixed(2)
let areaOfWindow = numberOfWindows * widthOfWindow / CM_PER_METR * heightOfWindow / CM_PER_METR;
let areaOfDor = numberOfDor * widthOfDor / CM_PER_METR * heightOfDor / CM_PER_METR;
let metersOfWallpaper = areaForWallpaper - areaOfWindow - areaOfDor;
let rollsOfWallpaper = Math.ceil(metersOfWallpaper / oneRolls);
alert(rollsOfWallpaper);