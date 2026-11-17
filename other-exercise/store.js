function store(isPremium, buy) {

    let total = 0; 
    let descuento = 0;

    if(isPremium) {
        descuento = buy * 0.20;
    }
    else if(buy > 200000) {
       descuento = buy * 0.10;
    }
    else {
        descuento = buy;
    }

    total = buy - descuento;

    return total; 
}


console.log(store(true, 300000));
