const readline = require("node:readline/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 

async function cajero() {
    let carros = 0;
    let total = 0;
    
    let valor = Number(await rl.question("Ingresa el valor del siguiente carro:"));

    while(valor != 0) {
        total += valor;
        carros += 1;
        
        valor = Number(await rl.question("Ingresa el valor del siguiente carro:"));
    }

    console.log("Caja Cerrada");
    console.log("carros atendidos: " + carros); 
    console.log("Total recaudado: " + total); 

    rl.close();
}

cajero();