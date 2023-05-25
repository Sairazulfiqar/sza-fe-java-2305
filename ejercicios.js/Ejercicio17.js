/* Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
los números pares desde 2 hasta ese número utilizando un bucle `while`.*/

let num = 2

prompt ('Introduce un numero'); 

while (num) {
    if (num%2==0){
        console.log (num);
    }
    num = num +1;
}