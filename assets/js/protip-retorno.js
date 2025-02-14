// function crearPersona( nombre, apellido ){
//     return { nombre,apellido }    
// };

/*
    Cuando se coloca el paréntesis, se le indica a JS que se quiere devolver todo 
    lo que está dentro de los paréntesis (como un objeto) y no el cuerpo de la función.
*/
const crearPersona = ( nombre, apellido ) => ({ nombre,apellido });    

const persona = crearPersona('Luis', 'Zegarra');

console.log( persona );

function imprimeArgumentos(){
    console.log(arguments);
}

/*
    Para retornar argumentos en función de flecha se utiliza el parametro "rest".
    Después del parámetro "rest" no puede ir nada, 
    y si se desea colocar algo antes, tomará su propio valor (argumento) independiente
*/

const imprimeArgumentos2 = (edad, ...args) =>{
    // console.log({edad, args})
    return args;
}

//const argumentos = imprimeArgumentos2(10, true, false, 'Luis', 'Hola');

/*
    Se puede obtener cada valor que retorna la función y asignarlo
    en nueva variable
*/
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Luis', 'Hola');

console.log({casado, vivo, nombre, saludo});

/*
    Se puede obtener solo un valor de un objeto e incluso se puede
    obtener el valor y guardarlo en una nueva variable.
*/
const { apellido : nuevoApellido } = crearPersona('Luis', 'Zegarra');
console.log({nuevoApellido});

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};

// const imprimePropiedad = ( personaje ) => {
//     console.log('nombre', personaje.nombre);
//     console.log('codeName', personaje.codeName);
//     console.log('vivo', personaje.vivo);
//     console.log('edad', personaje.edad);
//     console.log('trajes', personaje.trajes);
// }

/* 
    Se puede destructurar un objeto para mostrar sus
    propiedades en cada variable, incluso se puede agregar
    un valor por defecto (como en edad) si el valor de este no existe
    o es undefined
*/
const imprimePropiedad = ({ nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre});
    console.log({codeName})
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

console.log(imprimePropiedad);