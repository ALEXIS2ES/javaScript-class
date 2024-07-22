/**
 * VARIABLES
 */

//declaracion de variables

// hasta la version de 2015 de ecma

//var alumno

// desde ecma 6  se utiliza

let alumno

// asignar valores a una variable

alumno =  "alexis CCamerccoa" 

//declaracion y asignacion

let profesor = "Victor Mamani"

//reasignacion de variable

profesor = "Leonardo Valdez"

console.log(typeof profesor)

//asignacion por referencia

let teacher = "victor"
let student = teacher

teacher = "alexis"

student = "leonardo"

console.log(teacher)
console.log(student)