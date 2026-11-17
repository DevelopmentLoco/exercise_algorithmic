
function calificaciones(notesArray) {

    // Comprobar que existan notas
    if (notesArray.length === 0) {
        console.log("No hay calificaciones para analizar");
        return;
    }

    // Variables iniciales
    let suma = 0;
    let aprobados = 0;
    let reprobados = 0;

    let notaAlta = notesArray[0];
    let notaBaja = notesArray[0];

    // Recorrer el array una sola vez
    for (let i = 0; i < notesArray.length; i++) {

        // Sumar las notas
        suma += notesArray[i];

        // Contar aprobados
        if (notesArray[i] >= 3) {
            aprobados++;
        }

        // Contar reprobados y mostrarlos
        if (notesArray[i] < 3) {
            reprobados++;
            console.log("Estudiante " + (i + 1) + " perdió con " + notesArray[i]);
        }

        // Buscar nota más alta
        if (notesArray[i] > notaAlta) {
            notaAlta = notesArray[i];
        }

        // Buscar nota más baja
        if (notesArray[i] < notaBaja) {
            notaBaja = notesArray[i];
        }
    }

    // Calcular promedio
    let promedio = suma / notesArray.length;

    // Mostrar resultados
    console.log("Promedio: " + promedio);
    console.log("Aprobados: " + aprobados);
    console.log("Reprobados: " + reprobados);
    console.log("Nota más alta: " + notaAlta);
    console.log("Nota más baja: " + notaBaja);
}


calificaciones([3.5, 2.8, 4.9, 3.0, 4.2]);

