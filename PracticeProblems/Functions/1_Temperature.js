const args = process.argv.slice(2);
let choice = parseInt(args[0]);
let temperature = parseInt(args[1]);

switch (choice) {
    case 1:
        degF(temperature);
        break;
    case 2:
        degC(temperature);
        break;
    default:
        break;
}

function degF(temperature) {

    let fahrenheit = temperature*9/5 + 32;
    console.log("The temperature in fahrenheit = "+fahrenheit);
}

function degC(temperature) {

    let celcius = (temperature-32)*5/9;
    console.log("The temperature in fahrenheit = "+celcius);
}

