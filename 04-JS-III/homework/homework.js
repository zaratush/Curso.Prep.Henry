// No cambies los nombres de las funciones.
function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:  - Test Passed!

  return array[0]

}
function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:  - Test Passed!

  return array[array.length - 1];

}
function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:  - Test Passed!

  return array.length;

}
function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:   -   Test Failed!   Fijate que estas declarando una variable que ya existe (array es una matriz de enteros)
  //agregar suma <-0
  
  for (var i = 0; i <array.length; i++) {

    Math.ceil(array[i])
    array[i]=array[i]+ 1

  }
  return array
}
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array


  array.push (elemento)
  return array

}
function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:   -   Test Failed!  Ver de nuevo Array.prototype.unshift() 
  
  array.unshift(elemento)
  return array
  
}
function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:   -   Test Failed!  Ver de nuevo Array.prototype.join()

  return palabras.join(" ")
}
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:   -   Test Failed!  Bucle infinito. Ver de nuevo Array.prototype.includes()
  
  
  return array.includes(elemento)
  
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:    -   Test Failed!  La idea de math.ceil esta excelente cuando no sabemos que tipo de datos van a ingresar.
  // En este caso asume que son enteros, y lo resuelves solo con el for.
 
   suma=0
    
  for (var i = 0; i < numeros.length; i++)
    { suma = numeros[i] + suma }
  return suma
}



function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:    -   Test Failed!  Asume que tienes la iteracion, y calcula solo el promedio.
  // Por otra parte, chequear donde deberia cerrar el for {}

   
  return agregarNumeros(resultadosTest) / resultadosTest.length
    
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:  - Test Passed!
  mayor = 0
  for (var i = 0; i < numeros.length; i++) {
    if (mayor < numeros[i]) {
      mayor = numeros[i]
    }
  }
  return mayor
}
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  //Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:  // Tu código:  - Test Passed!

  if (arguments.length<1) return 0
    producto=1
  for (var i = 0; i < arguments.length; i++) {
   producto=arguments[i]*producto
 }
 return producto

}
// No modificar nada debajo de esta línea
// --------------------------------
module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};