"use strict";
//Implemente un metodo llamado cantidadDeDivisores que reciba un 
//numero entero y devulva cantidad de divisores-
//Por ejemplo, para el numero 16, sus divisores son: 1,2,4,8,16,
//por lo que la respuesta deberia se 5.
//Re-utilice el metodo esMultiplo implementado para el ejercicio anterior.
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var num1 = rls.questionInt("Ingrese un numero: ");
var num2 = 0;
var cantMult = 0;
function esMultiplo(num1, num2) {
    if (num1 % num2 == 0) {
        return true;
        console.log("El numero: " + num2, "es multiplo de: " + num1);
        cantMult = cantMult++;
        console.log(cantMult);
    }
    else {
        return false;
    }
}
