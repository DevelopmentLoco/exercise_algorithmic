function notes(n1, n2, n3) {
    let total = 0;
    
    let sum = n1  + n2 + n3;
    
    total = sum / 3;

    Number(total.toFixed(2));

    return total;
}

console.log(notes(3, 3, 4))


