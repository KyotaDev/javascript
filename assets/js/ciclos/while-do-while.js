const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

let i = 0;

while (i < carros.length) {
    console.log(carros[i]);
    i++;
}

// Un undefined, null y false son valores falsos que pueden romper el ciclo while
while ( carros[i] ) {
    if ( i === 1) {
        i++;
        //break; // Rompe el ciclo
        continue; // Salta la iteración
    }
    console.log(carros[i]);
    i++;
}

// El Do While se ejecuta al menos una vez, aunque la condición sea falsa
do {
    console.log(carros[i]);
    i++;
}
while (i < carros.length);

