let a = 5;

if(a >= 10){ //Espera un valor booleano, pero también puede recibir undefined, null, asignación
    console.log('A es mayor o igual a 10');
}else{
    console.log('A es menor a 10');
}

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes, 3: Miércoles, 4: Jueves, 5: Viernes, 6: Sábado 

console.log({dia});

if(dia === 0){
    console.log('Domingo');
}else if(dia === 1){
    console.log('Lunes');
}
else{
    console.log('No es Lunes ni Domingo');
}

//Sin usar If Else o Switch, únicamente objetos
dia = 3; // 0: Domingo, 1: Lunes, 2: Martes, 3: Miércoles, 4: Jueves, 5: Viernes, 6: Sábado
dia = hoy.getDay();
const diasLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado'
}

const diasLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

console.log(diasLetras[dia] || 'Día no definido');

console.log(diasLetras2[dia] || 'Día no definido');