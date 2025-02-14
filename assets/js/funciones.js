function saludar( nombre ){
    console.log( arguments );
    console.log('Hola ' + nombre);
    return 1;
}

//Función anónima 
const saludar2 = function( nombre ){
    console.log('Hola ' + nombre);
}

//Función de flecha (Lambda)
const saludarFlecha = () => {
    console.log('Hola Flecha');
};

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
};


const retornoDeSaludar = saludar( 'Luis Homero', 26, true, 'Perú' ); 
console.log( retornoDeSaludar);

// saludarFlecha();
// saludarFlecha2('Melissa');

function sumar(a,b){
    return a + b;
}

const sumar2 = (a,b) => {
    return a + b;
}

const sumar2resumido = (a,b) => a + b;

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random;

console.log(getAleatorio());

/*
    Las funciones sin return explícito retornan undefined. 
    Cuando se ejecuta un return, no se ejecuta lo que está después de ese código.
    Las funciones de flecha se pueden resumir cuando solo tienen una línea de codigo;
*/