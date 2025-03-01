//Para las clases en Javascript se recomienda usar UpperCamelCase, es decir, la primera letra de cada palabra en mayúscula.
class Persona {

    static _conteo = 0; // Atributo estático, se accede a él sin instanciar la clase
    // Se puede acceder a un atributo estático sin instanciar la clase
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre); // No se puede acceder a atributos de instancia en métodos estáticos
        console.log('Hola a todos, soy un método estático');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
    // Constructor es el método que se ejecuta al instanciar la clase
    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++; // Se incrementa el conteo de instancias de la clase
    }

    // Los Setters y Getters son métodos especiales que permiten establecer y obtener el valor de un atributo de una clase 
    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    // Métodos, se acostumbra a que los métodos vayan después del constructor
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy(); // Se puede llamar a otro método de la misma clase
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

class Heroe extends Persona{
    clan = 'Sin clan';

    constructor(){
        clan = 'sin clan'; // Se puede declarar porque no utiliza el "this"
        super(); // Se debe llamar al constructor de la clase padre
        this.clan = 'Los Vengadores'; // Se debe usar después del super(), para todo que dependa del "this"
    }

    quienSoy() { // Se puede sobreescribir un método de la clase padre
        console.log(`Soy ${this.nombre}, ${this.codigo} y pertenezco al clan ${this.clan}`);
        super.quienSoy(); // Se puede llamar a un método de la clase padre
    }
}


const spiderman = new Heroe( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman' );
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );

console.log(spiderman);