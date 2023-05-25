/*Escribe un programa que solicite al usuario ingresar su calificación 
en un examen y muestre en la consola si ha aprobado 
(calificación mayor o igual a 70) o no.*/

let calificacion = +prompt ('ingrese su calificación')

if (calificacion >= 70){
    console.log ('Aprobado');
} else {
    console.log ('Suspendido');
}

