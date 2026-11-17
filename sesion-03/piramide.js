function piramide(n) {

    for (let fila = 1; fila <= n; fila++) {

        // Imprimir espacios
        for (let j = 1; j <= n - fila; j++) {
            process.stdout.write(" ");
        }

        // Imprimir asteriscos
        for (let j = 1; j <= 2 * fila - 1; j++) {
            process.stdout.write("*");
        }

        console.log("");
    }
}

piramide(4);