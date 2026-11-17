/*Acceso a un evento: pueden entrar los mayores de 18 años con boleta, 
o los menores acompañados de un adulto
con boleta. Pista: construye la tabla de verdad con 3 proposiciones.*/

function ticketEvent(age, adult, ticket, ) {
    
    if(age <= 0 ) {
        return "Edad Invalida"
    };

    if((age >= 18 && ticket === true ) || (!(age >= 18) && adult === true && ticket === true)) {
        return "Puedes entrar"
    }

    return "No puedes entrar"
}

console.log(ticketEvent(15, true, true)); //Puedes entrar
console.log(ticketEvent(20, false, true)); //Puedes entrar
console.log(ticketEvent(18, false, true)); //Puedes entrar
console.log(ticketEvent(15, false, true)); //No puedes entrar  
