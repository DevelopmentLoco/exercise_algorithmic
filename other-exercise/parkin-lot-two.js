function tarifaParqueadero(horas, tieneFactura) {
    if (horas <= 0) {
        return "Error: hora inválida";
    }
    
    let horasCobradas = Math.ceil(horas);

    //Si tiene factura, restamos 2 horas gratis (sin bajar de 0)
    if (tieneFactura) {
        horasCobradas = Math.max(0, horasCobradas - 2);
    }

    if (horasCobradas > 6) {
        return 20000;
    }

    return horasCobradas * 3000;
}

console.log(tarifaParqueadero(4, false)); // 12000
console.log(tarifaParqueadero(4, true));  // 6000 (2 horas gratis)
console.log(tarifaParqueadero(7, true));  // 15000 (5 horas cobradas)
console.log(tarifaParqueadero(7, false)); // 20000 (tarifa plana)