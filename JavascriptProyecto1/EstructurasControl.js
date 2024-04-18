const prompt = require('prompt-sync')(); // Importa el módulo 'prompt-sync' para obtener entrada del usuario de forma síncrona.

function adivinarNumero() {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Almacena un número aleatorio entre 1 y 100.
    let intentos = 0; // Almacena el número de intentos que ha realizado el usuario para adivinar el número.
    let intentoUsuario; // Almacena el número ingresado por el usuario en cada intento.
    do {
        intentoUsuario = parseInt(prompt("Intenta adivinar el número (entre 1 y 100):")); // Solicita al usuario que ingrese un número para adivinar.
        intentos++; // Incrementa el contador de intentos en cada iteración.
        if (intentoUsuario < numeroAleatorio) { // Comprueba si el número ingresado por el usuario es menor que el número aleatorio.
            console.log("El número es demasiado bajo. Intenta de nuevo."); // Muestra un mensaje indicando que el número es demasiado bajo.
        } else if (intentoUsuario > numeroAleatorio) { // Comprueba si el número ingresado por el usuario es mayor que el número aleatorio.
            console.log("El número es demasiado alto. Intenta de nuevo."); // Muestra un mensaje indicando que el número es demasiado alto.
        }
    } while (intentoUsuario !== numeroAleatorio); // Continúa el bucle hasta que el usuario adivine el número correcto.
    console.log("¡Felicidades! Adivinaste el número en " + intentos + " intentos."); // Muestra un mensaje de felicitación y el número de intentos requeridos para adivinar.
}

function calcularFactorial() {
    let numero = parseInt(prompt("Ingrese un número para calcular su factorial:")); // Almacena el número ingresado por el usuario para calcular su factorial.
    let factorial = 1; // Almacena el resultado del cálculo del factorial, inicializado en 1.
    for (let i = 1; i <= numero; i++) { // Itera desde 1 hasta el número ingresado por el usuario.
        factorial *= i; // Calcula el factorial multiplicando el resultado por el valor de cada iteración.
    }
    console.log("El factorial de " + numero + " es: " + factorial); // Muestra el resultado del cálculo del factorial.
}

function contarVocales() {
    let frase = prompt("Ingrese una frase para contar las vocales:"); // Almacena la frase ingresada por el usuario para contar las vocales.
    let vocales = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 }; // Almacena un objeto con las vocales como claves y su recuento inicializado en 0.
    for (let letra of frase.toLowerCase()) { // Itera sobre cada letra de la frase en minúsculas.
        if (letra in vocales) { // Comprueba si la letra es una vocal.
            vocales[letra]++; // Incrementa el contador de la vocal correspondiente.
        }
    }
    for (let vocal in vocales) { // Itera sobre cada vocal en el objeto 'vocales'.
        console.log("La vocal '" + vocal + "' aparece " + vocales[vocal] + " veces."); // Muestra el recuento de cada vocal.
    }
}

let opcion; // Almacena la opción seleccionada por el usuario en el menú.
do {
    console.log("Menú:");
    console.log("1. Adivinar el número");
    console.log("2. Calculadora de factorial");
    console.log("3. Contador de vocales");
    console.log("4. Salir");
    opcion = parseInt(prompt("Seleccione una opción:")); // Almacena la opción seleccionada por el usuario en el menú.

    switch (opcion) {
        case 1:
            adivinarNumero(); // Llama a la función para adivinar el número.
            break;
        case 2:
            calcularFactorial(); // Llama a la función para calcular el factorial.
            break;
        case 3:
            contarVocales(); // Llama a la función para contar las vocales en una frase.
            break;
        case 4:
            console.log("¡Hasta luego!"); // Muestra un mensaje de despedida cuando el usuario elige salir.
            break;
        default:
            console.log("Opción inválida. Por favor, seleccione una opción válida."); // Muestra un mensaje de error si el usuario selecciona una opción inválida.
    }
} while (opcion !== 4); // Continúa ejecutando el bucle hasta que el usuario elige salir (opción 4).

//Version del codigo: JavaScriptV1
//Autores: Juan Sebastian Tamayo Cuadrado y David Patiño
//Nombre del lenguaje utilizado: JavaScript 6.0
//Version del lenguaje utolizado: ECMASCRIPT 6.0
//Universidad tecnologica de pereira
//Programa de Ingenieria de Sistemas y Computacion
//Adivinar el número: El programa genera un número aleatorio entre 1 y 100. Luego, le pide al usuario que intente adivinar ese número.
//Después de cada intento, el programa proporciona pistas si el número proporcionado es demasiado bajo o demasiado alto. Continúa solicitando al usuario que adivine hasta que adivine el número correcto. 
//Finalmente, muestra cuántos intentos le tomó al usuario adivinar el número.
//Calculadora de factorial: El usuario ingresa un número entero positivo y el programa calcula su factorial.
//Utiliza un bucle for para iterar desde 1 hasta el número ingresado, multiplicando cada número en el camino para calcular el factorial.
//Contador de vocales: El programa le pide al usuario que ingrese una frase y luego cuenta el número de veces que aparece cada vocal (a, e, i, o, u) en esa frase.
//Utiliza un objeto para almacenar el recuento de cada vocal, y luego recorre cada letra de la frase, incrementando el contador correspondiente si la letra es una vocal.
//Salir: Esta opción permite al usuario salir del programa.
//El programa utiliza un bucle do-while para mostrar continuamente el menú y ejecutar la opción seleccionada por el usuario hasta que elija salir (opción 4). 
//Dependiendo de la opción seleccionada por el usuario, se llamará a la función correspondiente para llevar a cabo la operación deseada.