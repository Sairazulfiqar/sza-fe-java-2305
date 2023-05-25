/*Crea un programa que solicite al usuario ingresar un número del 1 al 12 y muestre en la
consola el nombre del mes correspondiente (por ejemplo, 1 corresponde a "Enero", 2
corresponde a "Febrero", etc.).*/

let mes = +prompt('Introduce un numero del 1 al 12');

switch (+mes) {
    case 1:
        console.log('Enero');
        break;
    case 2: 
        console.log ('Febrero');
        break;
    default: 
        console.log('Error');
}