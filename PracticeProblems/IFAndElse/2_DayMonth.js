const args = process.argv.slice(2);
let date = parseInt(args[1]);
let month = parseInt(args[0]);
let result = false;
if(month>3&&month<6)
{
    result = true;
}
if(month==3)
{
    if(date>=20&&date<=31)
    result = true;
}
if(month==6)
{
    if(date<=20&&date>=1)
    result = true;
}
console.log(result);