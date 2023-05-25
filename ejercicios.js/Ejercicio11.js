/*Crea un programa que solicite al usuario ingresar un número y determine si es divisible
entre 3. */
 
let numero = +prompt ('ingrese un número')

if (numero % 3 == 0) {
    console.log ('Es divisible entre 3');
} else {
    console.log ('No es divisible entre 3');
}