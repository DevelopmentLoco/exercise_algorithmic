function checkAge(age) {
    if(age >= 0 && age <= 120) {
        return "Edad Valida"
    }
    
    return "Edad Invalida"
}


console.log(checkAge(120)); //Edad Valida 
console.log(checkAge(0)); //Edad Valida
console.log(checkAge(-1)) //Edad Invalida