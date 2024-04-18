function validarNumero(num) {
    return !isNaN(num) && num !== 0; // Verifica si un número es válido (diferente de cero y no NaN)
  }
  
  function procesarNumeros(numeros) { 
    let cantidadMayores150 = 0; // Contador para la cantidad de números mayores a 150
    let mayor = Number.MIN_SAFE_INTEGER; // Almacena el mayor número encontrado, inicializado con el valor mínimo seguro en JavaScript
    let menor = Number.MAX_SAFE_INTEGER; // Almacena el menor número encontrado, inicializado con el valor máximo seguro en JavaScript
    let cantidadNegativos = 0; // Contador para la cantidad de números negativos
    let sumaPositivos = 0; // Suma de todos los números positivo
    let cantidadPositivos = 0; // Contador para la cantidad de números positivos encontrados
  
    for (let num of numeros) {
      if (!validarNumero(num)) { // Verifica si el número es válido
        console.log('Error: Todos los números deben ser diferentes de cero.');
        return;
      }
  
      if (num > 150) {
        cantidadMayores150++; // Incrementa el contador si el número es mayor a 150
      }
  
      if (num > mayor) {
        mayor = num;  // Actualiza el mayor número encontrado si el número actual es mayor
      }
      if (num < menor) {
        menor = num;  // Actualiza el menor número encontrado si el número actual es menor
      }
  
      if (num < 0) {
        cantidadNegativos++;  // Incrementa el contador si el número es negativo
      }
  
      if (num > 0) {
        sumaPositivos += num;  // Suma el número positivo a la suma total
        cantidadPositivos++; // Incrementa el contador de números positivos
      }
    }
  
    console.log('Cantidad de números Mayores a 150:', cantidadMayores150);
    console.log('Número mayor encontrado en el grupo:', mayor);
    console.log('Número menor encontrado en el grupo:', menor);
    console.log('Cantidad de Números negativos encontrados:', cantidadNegativos);
    console.log('Promedio de los Positivos Encontrados:', cantidadPositivos > 0 ? sumaPositivos / cantidadPositivos : 'N/A'); // Calcula y muestra el promedio de los números positivos

  }

  function verificarCantidadNumeros(numeros) {
    return numeros.length === 15;  // Verifica si hay exactamente 15 números en la lista
  }
  
  function iniciarPrograma() {
    console.log('Este programa lee desde el teclado 15 números diferentes de cero y realiza cálculos.');
  
    let numeros = [];
    process.stdout.write('Ingrese 15 números separados por espacios: '); // Almacena los números ingresados por el usuario
  
    process.stdin.once('data', (input) => {
      let numerosEntrada = input.toString().trim().split(' ').map(Number); // Convierte la entrada en una lista de números
  
      if (!verificarCantidadNumeros(numerosEntrada)) {
        console.log('Debe ingresar exactamente 15 números.'); 
        return;
      }
  
      procesarNumeros(numerosEntrada); // Procesa los números ingresados
    });
  }
  
  iniciarPrograma(); // Inicia la ejecución del programa

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
Define una función llamada validarNumero(num) que verifica si un número es un valor numérico válido y no es igual a cero.
Define una función llamada procesarNumeros(numeros) que toma una matriz de números como entrada y realiza varias operaciones con ellos, como contar cuántos números son mayores que 150, encontrar el número más grande y más pequeño, contar la cantidad de números negativos y calcular el promedio de los números positivos.
Define una función llamada verificarCantidadNumeros(numeros) que verifica si la cantidad de números ingresados es exactamente 15.
Define una función llamada iniciarPrograma() que inicia el programa, mostrando un mensaje de introducción y solicitando al usuario que ingrese 15 números separados por espacios.
Utiliza process.stdin.once() para capturar la entrada del usuario.
Una vez que se ingresa la entrada, la función procesa los números utilizando las funciones definidas anteriormente (verificarCantidadNumeros y procesarNumeros) y muestra los resultados por consola.
El programa solicita al usuario que ingrese 15 números, luego realiza varios cálculos con estos números y muestra los resultados por consola.*/
