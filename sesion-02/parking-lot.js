/*
    Parqueadero:
    1.Carro $4000 por hora o por fracción , Moto $2000
    2.Los primeros 15minutos gratis
    3.Cobro Maximo del dia 30.000
    4.Con factura del centro comercial paga la mitad(después del maximo)
    5.Tipo que no sea carro o ni moto, minutos negativos

*/

function calcularParqueadero(vehiculo, min, tieneFactura) {
    if (min < 0) {
        return "Los minutos no pueden ser negativos";
    }

    let tarifaHora = 0;
    
    switch (vehiculo.trim().toLowerCase()) {
        case "carro":
            tarifaHora = 4000;
            break;
        case "moto":
            tarifaHora = 2000; 
            break;
        default: 
            return "Error: vehículo no válido, debe ser carro o moto";
    }

    if (min <= 15) {
        return 0;
    }

    const horasCobradas = Math.ceil(min / 60);
    let total = horasCobradas * tarifaHora;

    const cobroMaximo = 30000;

    if (total > cobroMaximo) {
        total = cobroMaximo;
    }

    if (tieneFactura) {
        total = total / 2;
    }

    return total;
}

console.log(calcularParqueadero("Carro", 600, false)); //30000
console.log(calcularParqueadero("carro", 61, true));   //4000
console.log(calcularParqueadero("moto", 1000, false)); //30000
