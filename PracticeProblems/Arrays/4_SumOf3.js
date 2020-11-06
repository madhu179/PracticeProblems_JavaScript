let sumArray = new Array();
sumArray.push(1);
sumArray.push(-5);
sumArray.push(4);

let total = 0;
function sum(num) {
    total+num;
}

sumArray.forEach(sum);
let result = total;
if(result==0)
console.log("Sum is 0");
else
console.log("Sum is not 0");