let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10800, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log( personaje );
console.log( 'Nombre', personaje.nombre );
console.log( 'Nombre', personaje['nombre']);
console.log( 'Edad', )
console.log( 'Coords', personaje.coords);
console.log( 'Lat', personaje.coords.lat);
console.log( 'No Trajes', personaje.trajes.length );
console.log( 'Último traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('última película', personaje['ultima-pelicula'])

//Más detalles
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

//Devuelve un arreglo de arreglos, donde cada uno de estos tiene dos elementos, el nombre y el valor de la propiedad
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

console.log(personaje);

//Se puede "congelar" un objeto para que no puedan alterar los datos de sus propiedades, excepto de objetos dentro de ese mismo objeto
Object.freeze( personaje );

personaje.dinero = 1000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Perú';
console.log(personaje);

//Devuelve en un arreglo las propiedades
const propiedades = Object.getOwnPropertyNames(personaje);

//Devuelve en un arreglo los valores
const valores = Object.values(personaje);
console.log({propiedades, valores});