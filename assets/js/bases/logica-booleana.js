const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true

console.log( !regresaFalse() ); // true

console.warn('And'); // true si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && false ); // false
console.log( true && !false ); // true

console.log('=========');
console.log( regresaFalse() && regresaTrue() ); // false
console.log( regresaTrue() && regresaFalse() ); // false

console.log('4 condiciones', true && true && true && false ); // false

console.warn('OR'); // true si alguno de los valores es verdadero
console.log( true || false ); // true
console.log( false || false ); // false

console.log( regresaTrue() || regresaFalse() ); // true
console.log( '4 condiciones', false || false || false || true ); // true

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150;

console.log({ a1 });

const a2 = soyFalso || 'Ya no soy falso';
console.log({ a2 });

const a3 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
console.log({ a3 });

if ( regresaFalse() && regresaTrue() && (true || false || true) ) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}
