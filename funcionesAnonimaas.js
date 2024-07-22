/**
 * funciones - anonimas
 * 
 * almacenando la funcion dentro de la variable
 */

let sumar = function (a, b, c){
    return a+b+c
}

let resultado = sumar(2,4,5)
console.log(resultado)

// tambien pueden ser autoinvocadas

(function(a, b, c){
    console.log(a+b+c)
}(10,4,5))
