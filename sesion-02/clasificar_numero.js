function clasificarNumero(number) {
    const inputNumber = number;

    if(inputNumber > 0) {
        return "Es positivo";
    }
    else if(inputNumber < 0) {
        return "Es negativo";
    }
    else {
        return "Cero"; 
    }
}

console.log(clasificarNumero(0)); //Cero
console.log(clasificarNumero(1)); //Es positivo
console.log(clasificarNumero(-1)); //Es negativo