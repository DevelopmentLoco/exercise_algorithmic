/*Tarifa de un gimnasio: estudiantes pagan 50 %, mayores de 60 años pagan 40 %
y si cumplen ambas condiciones aplica el mayor descuento. 
Pista: la tabla de decisión revelará el caso que se repite.*/

function calculateDiscount(isStudent, age) {
    
    const total = 150000; // total a pagar ficticio 
    let discount = 0;

    if(isStudent && age > 60) {
        total = 0;
        return "No debes nada";
    }
    else if(isStudent) {
        discount = total * 0.50;
    }
    else if(age > 60) {
        discount = total * 0.40;
    }

    const finalTotal = total - discount; 

    return `Debes pagar ${finalTotal}`;
}


console.log(calculateDiscount(true, 18));
    
