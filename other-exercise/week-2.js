/*Riwi lab Ejercicio*/

// 1. Un año es bisiesto si es divisible entre 4 y no entre 100,
//    o si es divisible entre 400.
function esBisiesto(anio) {
  if(anio % 4 === 0 && !(anio % 100 === 0) || anio % 400 === 0) {
     return "Es bisiesto";
  }
  
  return "No es bisiesto";
}

// 2. Stock 0 → "Agotado"; entre 1 y 10 → "Bajo";
//    más de 10 → "Disponible"; negativo → "Error".
function semaforoInventario(stock) {
  
  switch(true) {
    case stock < 0:
      return "Error";
    break;
    case stock === 0:
      return "Agotado";
    break; 
    case stock >= 1 && stock <= 10:
      return "Bajo";
    break; 
    case stock > 10:
      return "Disponible";
    break;
    default: 
      return "Valor no valido";
  } 
}

console.log(esBisiesto(2024), semaforoInventario(5));
