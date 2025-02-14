// const arr = new Array(10);
// console.log(arr);

// let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];

// console.log( videoJuegos );

// console.log( videoJuegos[0] );

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1},
    [ 'X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ] ]
];

// console.log( arregloCosas );

/*
    Se puede acceder a elementos de un arreglo dentro de otro arreglo
*/
console.log( arregloCosas[7][4][1] );