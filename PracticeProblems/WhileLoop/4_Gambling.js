let start = 100;
let bet = 1;
let goal = 200;
let count = 0;
let chance;
let wonCount=0;
while(start!=0 && start!=goal)
{
chance = Math.floor(Math.random()*10)%2;
if(chance==0)
{
    start+=bet;
    wonCount++;
}
else
{
    start-=bet;
}
count++;
}

if(start==0)
{
console.log("The player went broke");
console.log("No of bets = "+count+" No of bets won = "+wonCount);
}
else
{
console.log("The player reached his goal");
console.log("No of bets = "+count+" No of bets won = "+wonCount);
}