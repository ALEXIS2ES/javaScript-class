
let amigos = ["alexis", "victor", "ccamerccoa", "mamani",]

//foreach necesita como parametro una funcion

let dato = amigos.forEach(amigo => console.log(`Hola ${amigo}`))

console.log(amigos)
//foreach hace algo con los elementos

/**
 * .map
 */
// tiene la misma funcionalidad de for each pero .map añade un nuevo array con cada clico de un nuevo dato 

let datos = amigos.map(amigo => `Hola ${amigo}`)

console.log(amigos)
console.log(datos)
