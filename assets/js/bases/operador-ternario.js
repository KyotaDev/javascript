/**
 * Días de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si está abierto hoy...

const dia = 0; // 0: domingo... 1: lunes... 2: martes... 3: miércoles... 4: jueves... 5: viernes... 6: sábado...
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto, Está cerrado, hoy abrimos a las XX

// if (dia === 0 || dia === 6) {
//     console.log('Fin de semana');
//     horaApertura = (dia === 0) ? 9 : 11;
//     mensaje = (horaActual >= horaApertura) ? 'Está abierto' : `Hoy abrimos a las ${horaApertura}`;
// } else {
//     console.log('Día de semana');
//     horaApertura = 11;
//     mensaje = (horaActual >= horaApertura) ? 'Está abierto' : `Hoy abrimos a las ${horaApertura}`;
// }

horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;

mensaje = ( horaActual >= horaApertura ) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;