/* Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor
de ellos. */

let valorA = prompt ('introduce primer valor');
let valorB = prompt ('introduce segundo valor');
let valorC = prompt ('introduce tercer valor');

if( valorA > valorB && valorA > valorC ); {
    alert ('A es mayor');
}

if( valorB > valorA && valorB > valorC ); {
    alert ('B es mayor');
}

if( valorC > valorA && valorC > valorB ); {
    alert ('C es mayor');
}