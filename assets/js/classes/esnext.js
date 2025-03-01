class Rectangulo {

    #area = 0; // Propiedad privada (aún no soportada por todos los navegadores)

    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }

    calcularArea() {  //No existe el concepto de métodos privados en JavaScript
        console.log(this.#area);
    }
}

const rectangulo = new Rectangulo(10, 15); // Crear una instancia de la clase
rectangulo.calcularArea(); // 150
console.log(rectangulo.#area); // Error: Uncaught SyntaxError: Private field '#area' must be declared in an enclosing class