/**
 * funciones - flecha -arrow funtions
 *               =>
 */

const sumar = (a, b) => a+b

const restar = (c, d) => c-d

console.log(sumar(71, 3))
console.log(restar(71, 3))

// cuando la funcion flecha obias los parentesis en caso de tene una sola funcion mas si poner los parentesis cunado se mas parametros

const saludar = nombre => {
    if (typeof nombre === "string"){
        return`Hola ${nombre}`
    }else{
        console.error("tipo de dato equivocado!!!")
    }      
}

console.log(saludar("alexis"))