/*Escribe un programa que pida al usuario ingresar un año y determine si es bisiesto o no (un
año es bisiesto si es divisible entre 4, pero no entre 100, a menos que también sea divisible
entre 400).*/

let año = prompt('Ingresa un año'); 

if ((año % 4 ==0) && ((año % 100 !=0) || (año % 400 ==0))){
    console.log ('El año es bisiesto');
} else {
    console.log('El año no es bisiesto');
}