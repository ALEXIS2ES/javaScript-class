/**
 * funciones - primera clase
 * nombrecompleto pasa a ser la misma funcion
 *  si guardo con parentesis guardo la ejecucion de la funcion y pasa a ser u dato
 * la funcion puedo almacenar la variable
 * dentro de una variable puedo guardar un dato y dentro del dato una funcion
 */

function obtenerNombreCompleto(nombre, apellido){
    return `${nombre} ${apellido}`
}
let nombreCompleto  = obtenerNombreCompleto()

console.log(nombreCompleto("juan", "Mora"))