let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

//Largo de un arreglo (cantidad de elementos)
console.log('Largo: ', juegos.length);

//Primer elemento
let primero = juegos[0];
//Último elemento
let ultimo = juegos[juegos.length-1];

/* 
    La función forEach recibe como parametros el value (elemento) del array, su index (indice), 
    y su array (arr);
*/
juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr })
});

// Para agregar un nuevo elemento al final, la función push retorna la nueva longitud del arreglo
let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({ nuevaLongitud, juegos });

// Para agregar un nuevo elemento al inicio, la función unshift retorna la nueva longitud del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

//Elimina el último elemento del arreglo y retorna el elemento borrado
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

//Splice elimina elementos del arreglo desde la posición que se le indica
let pos = 1;

let juegosBorrados = juegos.splice( pos, 2 );
console.log({juegosBorrados, juegos})

//Obtiene la posición de un elemento en el arreglo
let metroidIndex = juegos.indexOf('Metroid');
console.log({ metroidIndex });