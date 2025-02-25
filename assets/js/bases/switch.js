const dia = 0; // 0: Domingo

switch (dia) { // Evalúa la variable dia con un triple igual (===)
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    default:
        console.log('No es domingo, ni lunes, ni martes, ni miércoles');
        break;
}