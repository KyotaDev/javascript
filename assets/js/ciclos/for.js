const heroes = ['Batman', 'Superman', 'Wonder Woman', 'Flash'];

//El for tradicional es el más común y se utiliza cuando se necesita iterar sobre un arreglo o un objeto.
console.warn('For tradicional');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

//El for in se utiliza para iterar sobre las propiedades de un objeto.
console.warn('For in');
for (const i in heroes) {
    console.log(heroes[i]);
}

//El for of se utiliza para iterar sobre los elementos de un objeto iterable como un arreglo.
console.warn('For of');
for (const hero of heroes) {
    console.log(hero);
}