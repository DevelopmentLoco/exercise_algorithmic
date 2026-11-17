/*Bisiesto*/

function leapYear(year) {
    
    if((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0 ) {
        return "Es un año bisiesto";
    } 

    return "No es bisiesto";
}

console.log(leapYear(1900)); //No es bisiesto
console.log(leapYear(2000)); //Es un año bisiesto
console.log(leapYear(2024)); //Es un año bisiesto
console.log(leapYear(2026)); //No es bisiesto