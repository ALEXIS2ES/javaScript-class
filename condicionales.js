/**
 * Condicionales
 */

/**
 * invitacion a una fiesta
 * 
 * 1 si eres mayor de edad y menor de 65 puedes venir
 * 3 sino, si tienes permiso firmado de tus padres, puedes venir
 * 2 sino por favor quedate en casa
 * 4 añade un rango solo para menores de 18 años
 */

let persona = "alexis"
let edad  = 12
let permiso = true

if (edad >= 18 && edad < 65){
    console.log(`${persona} puedes venir a la fiesta` + " " + "Bienvenido")
}else if (permiso === true && edad < 18) {
    console.log(`${permiso} puedes venir, tienes permiso`)
}else{
    console.log(`${persona} No puedes venir por favor quedate en casa`)
}

//if
//if else
//else if

/**
 * condicionales multiples
 * 
 * que personaje de dragonball Z eres?
 * 
 * si eres fuerte y comelon eres goku
 * si eres veloz y egoista eres vegueta
 * si eres pequeño y debil eres krilin
 * si eres travieso y jugueton eres trunks
 * si no eres ninguno, eres una sabandija
 */

/**
 * codigo repetitivo   y no es una buena practica de programacion pero si funciona
 * 
 * let personalidad = "pequeño y debil"

if(personalidad === "Fuerte y Comelon"){
    console.log("eres goku")
}else if(personalidad === "veloz y egoista"){
    console.log("eres vegueta")
}else if(personalidad === "pequeño y debil"){
    console.log("eres vegueta")
}else if (personalidad === "travieso y jugueton"){
    console.log("eres trunks")
}else{
    console.log("eres una sabandija")
}
 */

// condicionales multiples

let personalidad = "veloz y egoista"

switch(personalidad){
    case "fuerte y comelon":
        console.log("eres goku")
        break
    case "veloz y egoista":
        console.log("eres vegueta")
        break
    case "pequeño y debil":
        console.log("eres krilin")
        break
    case "travieso y jugueton":
        console.log("eres trunks")
        break
    default:
        console.log("eres una sabandija")
}




