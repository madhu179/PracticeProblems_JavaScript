//1
let digit = Math.floor(Math.random() * 10);
console.log("Digit = "+digit);

//2
let diceValue = 1 + Math.floor(Math.random() * 10)%6;
console.log("Dice Roll = "+diceValue);

//3
let diceValue1 = 1 + Math.floor(Math.random() * 10)%6;
let diceValue2 = 1 + Math.floor(Math.random() * 10)%6;
console.log("sum = "+(diceValue1+diceValue2));

//4
let randomValue1 = Math.floor(Math.random() * 100);
let randomValue2 = Math.floor(Math.random() * 100);
let sum = randomValue1 + randomValue2;
let avg = sum/2;
console.log("sum = "+sum+" average = "+avg);

//5
//a
let feetInInches = 12;
console.log("42 inches in feet = "+ (1/feetInInches)*42);

//b
let feetinCM = 30.48;
let areaInMeters = ((60*feetinCM/100) * (40*feetinCM)/100);
console.log("Plot area in meters = "+areaInMeters);

//c
let squareMeterInAcre = 0.000247;
let areaInAcres = areaInMeters * squareMeterInAcre;
console.log("Plot area in Acres = "+areaInAcres);
