class Singleton {
    static instance;
    nombre = '';

    constructor(nombre = '') {
        // if ?
        if (!!Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.nombre = nombre;

        // return this; // No es necesario
    }
}

const instacia1 = new Singleton('Ironman');
const instacia2 = new Singleton('Spiderman');
const instacia3 = new Singleton('Black Panther');

console.log(`Nombre en la instancia1 es: ${instacia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instacia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instacia3.nombre}`);