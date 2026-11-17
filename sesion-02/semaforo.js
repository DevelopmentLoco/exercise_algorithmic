
/*Semefaro*/

function semaforo(unidades) {
    
    if(unidades < 0)
    {
        return "error"
    }
    else if(unidades === 0) {
        return "Rojo Agotado"
    }
    else if(unidades >= 1 && unidades <= 10) {
        return "Amarrillo Pedir"
    }
    
    return "Verde todo bien";
}

console.log(semaforo(13))
console.log(semaforo(4));
console.log(semaforo(10));
console.log(semaforo(1));
console.log(semaforo(0));