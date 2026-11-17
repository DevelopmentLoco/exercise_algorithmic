
function calcularSubtotal(items) {
    let subtotal = 0;

    for (let i = 0; i < items.length; i++) {
        subtotal += items[i].precio * items[i].cantidad;
    }

    return subtotal;
}

function aplicarCupon(subtotal, cupon) {
    if (cupon === "RIWI10") {
        return subtotal - (subtotal * 10 / 100);
    }

    return subtotal;
}

function calcularImpuesto(valor) {
    return valor * 8 / 100;
}

function calcularEnvio(subtotal) {
    if (subtotal >= 100000) {
        return 0;
    } else {
        return 10000;
    }
}

function calcularTotal(items, cupon) {
    let subtotal = calcularSubtotal(items);

    let subtotalConCupon = aplicarCupon(subtotal, cupon);

    let impuesto = calcularImpuesto(subtotalConCupon);

    let envio = calcularEnvio(subtotalConCupon);

    let total = subtotalConCupon + impuesto + envio;

    console.log("----- FACTURA -----");
    console.log("Subtotal: $" + subtotal);
    console.log("Subtotal con cupón: $" + subtotalConCupon);
    console.log("Impuesto: $" + impuesto);
    console.log("Envío: $" + envio);
    console.log("Total a pagar: $" + total);

    return total;
}

const carrito = [
    { precio: 50000, cantidad: 2 },
    { precio: 30000, cantidad: 1 }
];

calcularTotal(carrito, "RIWI10");