/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Este es un comentario de una sola linea

// 2. Escribe un comentario en varias líneas
/*
    Comentario de
        varias 
    Lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let texto = "Hola JavaScript"
let numero = 42
let esMayorDeEdad = true
let sinValor = undefined
let vacio = null
let identificadorUnico = Symbol("id")
let enteroGrande = 9007199254740993n

// 4. Imprime por consola el valor de todas las variables

console.log(texto)
console.log(numero)
console.log(esMayorDeEdad)
console.log(sinValor)
console.log(vacio)
console.log(identificadorUnico)
console.log(enteroGrande)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof texto)
console.log(typeof numero)
console.log(typeof esMayorDeEdad)
console.log(typeof sinValor)
console.log(typeof vacio)
console.log(typeof identificadorUnico)
console.log(typeof enteroGrande)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

texto = "Aprendiendo JS"               
numero = 100                              
esMayorDeEdad = false                 
sinValor = undefined                   
vacio = null                             
identificadorUnico = Symbol("nuevoId")
enteroGrande = 12345678901234567890n    

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

texto = 22
numero = "Nuevo"
esMayorDeEdad = undefined
sinValor = null
vacio = false
identificadorUnico = 1245678901234567890n
enteroGrande = Symbol("nuevoId")

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const texto1 = "Hola"
const numero1 = 42
const booleano1 = true
const sinValor1 = undefined
const vacio1 = null
const identificadorUnico1 = Symbol("id")
const enteroGrande1 = 9007199254740993n

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// texto = "Adiós"                  // Error: Assignment to constant variable
// numero = 100                     // Error: Assignment to constant variable
// booleano = false                 // Error: Assignment to constant variable
// sinValor = "ahora tiene valor"   // Error: Assignment to constant variable
// vacio = "ya no es null"          // Error: Assignment to constant variable
// identificadorUnico = Symbol("x") // Error: Assignment to constant variable
// enteroGrande = 123n              // Error: Assignment to constant variable
