/**
 * scope
 */
//scope globales
let nombre = "alexis"
nombre = "juan"
//scope locales
function saludar (){
    nombre = " betto"
    console.log(`Hola ${nombre}`)
}

saludar()
console.log(nombre)

//scope globales
const NOMBRE = "alexis"

//scope locales
const saluda = function (){
     const NOMBRE = " betto"
    console.log(`Hola ${NOMBRE}`)
}
saluda()
console.log(NOMBRE)
