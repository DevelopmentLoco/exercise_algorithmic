function checkLog(age, terms ) {

    let resultado = terms.trim().toLowerCase();


    if(age >= 14 && resultado === "si") {
        return "Registro Exitoso"
    } 
    else {
        return "No Puedes Registrarte"
    }
}

console.log(checkLog(20, "SI"));