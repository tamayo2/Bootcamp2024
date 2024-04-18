const columnas = 15; // Define el número de columnas en la pantalla para la animación
const velocidad = 500; // Define la velocidad de la animación en milisegundos

function imprimirLetras() {
  let posicionA1 = 0; // Almacena la posición del primer carácter "A" en la línea
  let posicionA2 = columnas - 1; // Almacena la posición del segundo carácter "A" en la línea

  const intervalo = setInterval(() => { // Configura un intervalo para ejecutar la animación
    
    console.clear(); // Limpia la consola en cada iteración del intervalo

    for (let i = 0; i < posicionA1; i++) { // Itera y agrega espacios antes del primer carácter "A"
      process.stdout.write(" ");
    }

    process.stdout.write("A"); // Escribe el primer carácter "A"

    for (let i = posicionA1 + 1; i < posicionA2; i++) { // Itera y agrega espacios entre los dos caracteres "A"
      process.stdout.write(" ");
    }
    process.stdout.write("A\n"); // Escribe el segundo carácter "A" seguido de un salto de línea

    posicionA1++; // Incrementa la posición del primer carácter "A"
    posicionA2--; // Decrementa la posición del segundo carácter "A"

    if (posicionA1 >= posicionA2) clearInterval(intervalo); // Detiene la animación cuando las posiciones coinciden
  }, velocidad); // Configura la velocidad de la animación
}

imprimirLetras(); // Inicia la animación de imprimir letras

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
Este programa imprime un patrón de letras "A" que se estrecha gradualmente hacia el centro de la pantalla, usando espacios en blanco para crear el efecto de una pirámide invertida. 
Se definen dos constantes:columnas : Define el número de columnas en la pantalla donde se imprimirá la pirámide de letras.
velocidad: Define la velocidad a la que se actualizará la impresión de la pirámide, en milisegundos.
La función imprimirLetras se encarga de imprimir la pirámide de letras.
Se inicializan dos variables locales: posicionA1: Representa la posición del primer carácter "A" en la fila actual.
posicionA2: Representa la posición del segundo carácter "A" en la fila actual, contando desde el final de la línea.
Se utiliza un intervalo de tiempo (setInterval) para repetir la impresión de la pirámide de letras a una velocidad determinada por la constante velocidad.
Dentro del intervalo, se limpia la consola (console.clear()) para borrar la impresión anterior y preparar el espacio para la nueva impresión.
Se recorre un bucle for para imprimir los espacios en blanco antes del primer carácter "A", hasta llegar a la posición posicionA1.
Se imprime el primer carácter "A" en la posición posicionA1.
Se recorre otro bucle for para imprimir los espacios en blanco entre el primer y segundo carácter "A", hasta llegar a la posición posicionA2.
Se imprime el segundo carácter "A" en la posición posicionA2.
Se actualizan las posiciones posicionA1 y posicionA2 para que el patrón de letras se estreche gradualmente hacia el centro.
Se verifica si el primer carácter "A" alcanza o supera al segundo carácter "A" en la misma línea. Si es así, se detiene el intervalo de tiempo (clearInterval) y se termina la ejecución del programa.
El programa imprime una pirámide de letras "A" que se estrecha gradualmente hacia el centro de la pantalla, utilizando un intervalo de tiempo para actualizar la impresión a una velocidad determinada.*/
