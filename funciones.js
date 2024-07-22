/**
 * funciones
 */

// declaracion de mi funcion saludar

function saluda(){
    console.log("hola muy buenos dias")
}

saluda()

/**
 * funciones -parametros
 */


function salud(nombre){

    if (typeof nombre === "string"){
        console.log(`hola,${nombre} muy buenos dias`)
    }else[
        console.log("escriba un nombre correcto")
    ]
}

/**
 * funciones - valores de retorno
 */

function obtenerNombreCompleto(nombre, apellido){
     return `${nombre} ${apellido}`
}
console.log(obtenerNombreCompleto("alexis", "CCamerccoa"))

