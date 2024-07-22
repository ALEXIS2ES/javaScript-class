// find includes, some, every

let numeros = [10,436,45,74,33,9,2,54]

//find devuelve el dato

let datos = numeros.find(num => num%2 === 1)

console.log(datos)

//includes no devuelve,si no un dato un booleano

let dato = numeros.includes(35)

console.log(dato)

//some si hace una validacion de comparacion

let numero = [10,436,45,-74,33,9,2,54]

let dat = numero.some(num => num<0)

console.log(dat)

//every  hago un comparacion tiene que dar true para todos los elementes de mi arreglo

let nume = [10,436,45,-74,33,9,2,54]

let da = nume.every(num => typeof num === "number")

console.log(da)
