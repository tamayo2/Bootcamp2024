const prompt = require('prompt-sync')(); // Importa el módulo 'prompt-sync' para obtener entrada del usuario de forma síncrona.

function convertirTemperatura(){
    let celsius = parseFloat(prompt("ingrese la temperatura en grados celsius:")); // Almacena la temperatura en grados Celsius ingresada por el usuario.
    let Fahrenheit = (9/5 * celsius) + 32; //// Almacena la temperatura convertida a grados Fahrenheit.
    console.log ("la temperatura en grados Fahrenheit es:" + Fahrenheit.toFixed(2)); // Muestra la temperatura en grados Fahrenheit con dos decimales.
}

function calcularIMC() {
    let peso = parseFloat(prompt("Ingrese su peso en kilogramos:")); // Almacena el peso ingresado por el usuario en kilogramos.
    let altura = parseFloat(prompt("ingrese su altura en metros:")); //// Almacena la altura ingresada por el usuario en metros.
    let IMC = peso / Math.pow(altura, 2); // Calcula el índice de masa corporal (IMC) utilizando la fórmula peso / altura al cuadrado.
    console.log("su indice de masa corporal (IMC) es:" + IMC.toFixed(2)); // Muestra el IMC con dos decimales.
}

function nombreUsuario() {
    let nombre = prompt("Ingrese su nombre:"); // Almacena el nombre ingresado por el usuario.
    let apellido = prompt("ingrese su apellido:"); // Almacena el apellido ingresado por el usuario.
    let añoNacimiento = prompt("ingrese su año de nacimiento:"); // Almacena el año de nacimiento ingresado por el usuario.
    let nombreUsuario = nombre + apellido + añoNacimiento; // Combina el nombre, apellido y año de nacimiento para formar el nombre de usuario.
    console.log("nombre de usuario combinado:" + nombreUsuario); // Muestra el nombre de usuario combinado.
}

function calculaFibonnaci() {
    let n = parseInt(prompt("ingrese el valor de n:")); // Almacena el valor de 'n' ingresado por el usuario.
    let a = 0, b = 1, temp; // Declara variables para calcular la secuencia de Fibonacci.
    if (n == 0){
        console.log("El n-esimo numero fobonacci es:" + a); // Si 'n' es 0, muestra el primer número de Fibonacci.
    }else if (n == 1) {
        console.log("el n-simo numero fibonacci es:" + b); // Si 'n' es 1, muestra el segundo número de Fibonacci.
    }else {
        for (let i = 2; i <= n; i++) { // Si 'n' es mayor que 1, calcula el 'n-ésimo' número de Fibonacci.
            temp = a + b;
            a = b;
            b = temp;
        }
        console.log("el n-simo numero numero de fobonacci es:" + b); // Muestra el 'n-ésimo' número de Fibonacci.
    }
}

let opcion; // Almacena la opción seleccionada por el usuario en el menú.
do {
    console.log("1.Conversor de temperatura:");
    console.log("2.Calcular IMC:");
    console.log("3.Generador nombre usuario:");
    console.log("4.Funcion Fibonacci:");
    console.log("5.salir:");
    opcion = parseInt(prompt("seleccione una opcion:")); // Almacena la opción seleccionada por el usuario en el menú.

    switch (opcion) {
        case 1:
            convertirTemperatura(); // Llama a la función para convertir la temperatura.
        break;
        case 2:
            calcularIMC(); // Llama a la función para calcular el IMC.
        break;
        case 3:
            nombreUsuario(); // Llama a la función para generar el nombre de usuario.
        break;
        case 4:
            calculaFibonnaci(); // Llama a la función para calcular la secuencia de Fibonacci.
        break;
        case 5:
            console.log("!hasta pronto!"); // Muestra un mensaje de despedida cuando el usuario elige salir.
        break;
        default: console.log("opcion invalida. Por favor, seleccione una opcion valida."); // Muestra un mensaje de error si el usuario selecciona una opción inválida.
    }
}while(opcion !== 5); // Continúa ejecutando el bucle hasta que el usuario elige salir (opción 5).

//Version del codigo: JavaScriptV1
//Autores: Juan Sebastian Tamayo Cuadrado y David Patiño
//Nombre del lenguaje utilizado: JavaScript 6.0
//Version del lenguaje utolizado: ECMASCRIPT 6.0
//Universidad tecnologica de pereira
//Programa de Ingenieria de Sistemas y Computacion
//Este programa es un menú interactivo que ofrece al usuario varias opciones relacionadas con cálculos y funciones útiles.
//Conversor de temperatura: Esta opción permite al usuario ingresar una temperatura en grados Celsius y convierte esa temperatura a grados Fahrenheit utilizando la fórmula de conversión adecuada. Luego muestra el resultado en la consola.
//Calcular IMC (Índice de Masa Corporal): El usuario puede ingresar su peso en kilogramos y su altura en metros. El programa calcula automáticamente el IMC utilizando la fórmula IMC = peso / altura^2 y muestra el resultado.
//Generador de nombre de usuario: Aquí, el usuario puede ingresar su nombre, apellido y año de nacimiento. El programa combina estos datos para formar un nombre de usuario y lo muestra en la consola.
//Función Fibonacci: Esta opción permite al usuario ingresar un número entero positivo 'n' y luego calcula el 'n-ésimo' número de la secuencia de Fibonacci. El programa muestra el resultado en la consola.
//Salir: Esta opción permite al usuario salir del programa.
//El programa utiliza un bucle do-while para mostrar continuamente el menú y ejecutar la opción seleccionada por el usuario hasta que elija salir (opción 5).
//Dependiendo de la opción seleccionada por el usuario, se llamará a la función correspondiente para llevar a cabo la operación deseada.