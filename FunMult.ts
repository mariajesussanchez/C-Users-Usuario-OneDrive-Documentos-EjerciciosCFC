//Cree un metodo esMultiplo con 2 parametros que devuelva el valor logico
//Verdadero o Falso segun si el primer numero que se indique como parametro
//es multiplo del segundo.
//Recuerde que un numero es multiplo de otro si al dividirlo su resto es cero.
//Recuerde que la operacion mod permite saber si el resto de una division es cero.

import * as rls from"readline-sync";

let num1:number = rls.questionInt("Ingrese un primerNumedo: ");
let num2:number = rls.questionInt("Ingrese un segundoNumero: ");


function calcularMultiplo(num1:number, num2:number):number {  
    
    return (num1 % num2);

} console.log("el numero: ",num2, "es multiplo de: ",num1);
