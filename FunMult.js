"use strict";
//Cree un metodo esMultiplo con 2 parametros que devuelva el valor logico
//Verdadero o Falso segun si el primer numero que se indique como parametro
//es multiplo del segundo.
//Recuerde que un numero es multiplo de otro si al dividirlo su resto es cero.
//Recuerde que la operacion mod permite saber si el resto de una division es cero.
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var num1 = rls.questionInt("Ingrese un primerNumedo: ");
var num2 = rls.questionInt("Ingrese un segundoNumero: ");
function calcularMultiplo(num1, num2) {
    return (num1 % num2 == 0);
}
