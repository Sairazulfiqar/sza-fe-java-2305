let A= -2;
let B= 10;

if (A > 0){
    if (A > 3) {
        console.log ('A es mayor a 3');
    } else {
        console.log ('A es menor a 3');
}
}

if (A > B) {
    console.log('A es mayor');
}

if (A > B) {
    console.log ('B es menor');
}

if ( A ==B){
    console.log ('A es igual que B')
}

 if (A > B){
    console.log ('A es mayor');
}else if (A < B){
    console.log ('B es mayor');
}else{
    console.log ('A y B son iguales');
}

// set de datos acotados
let dia = 1;

switch (dia) {
    case 1:
        console.log ('lunes');
        break;
    case 2:
        console.log('martes');
        break;
    case 3:
        console.log('miercoles');
    case 4:
        console.log('jueves');
    case 5:
        console.log ('viernes');
        break;
    default:
        console.log ('No es un dia laborable');
        break;
}


