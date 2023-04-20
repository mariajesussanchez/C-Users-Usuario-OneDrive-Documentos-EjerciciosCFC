
//Implemente un metodo llamado cantidadDeDivisores que reciba un 
//numero entero y devulva cantidad de divisores-
//Por ejemplo, para el numero 16, sus divisores son: 1,2,4,8,16,
//por lo que la respuesta deberia se 5.
//Re-utilice el metodo esMultiplo implementado para el ejercicio anterior.

import * as rls from "readline-sync";


let num1: number = rls.questionInt("Ingrese un numero: ");
let num2: number = 0;
let cantMult: number = 0;



function esMultiplo(num1:number, num2: number): boolean {

    if (num1 % num2 == 0) {
        return true;
        cantMult++

    } 
    else {
        return false;
    }
}

for funtion esMultiplo()   

console.log("El numero: "+num2, "es multiplo de: "+num1);
cantMult= cantMult++;
console.log(cantMult);








