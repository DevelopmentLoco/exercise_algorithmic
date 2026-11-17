
const readline = require("node:readline/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function validarPIN() {

    let pin;
    let intentos = 0;
    let acceso = false;

    do {
        pin = await rl.question("Ingresa tu PIN: ");

        intentos++;

        if (pin === "2580") {
            acceso = true;
        }

    } while (acceso === false && intentos < 3);

    if (acceso === true) {
        console.log("Bienvenido");
    } else {
        console.log("Tarjeta bloqueada");
    }

    rl.close();
}

validarPIN();
