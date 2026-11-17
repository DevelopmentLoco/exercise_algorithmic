function calculateTip(account, people) {
    const propina = account * 0.10;

    const total = account + propina;
    
    const porPersona = total / people;
    
    return porPersona;
}


console.log(calculateTip(120000, 4));