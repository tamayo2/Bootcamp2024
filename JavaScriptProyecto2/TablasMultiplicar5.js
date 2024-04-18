function presentarTablas() {
  let multiplicando = 1; // Almacena el número del multiplicando actual
  while (multiplicando <= 10) { // Bucle para iterar sobre los multiplicandos del 1 al 10
    console.log("Tabla de multiplicar del" , multiplicando + ":");
    let multiplicador = 1; // Almacena el número del multiplicador actual
    while (multiplicador <= 10) { // Bucle para iterar sobre los multiplicadores del 1 al 10
      console.log(multiplicando, "x", multiplicador, "=", multiplicando * multiplicador); // Muestra la multiplicación actual
      multiplicador++; // Incrementa el multiplicador para avanzar a la siguiente multiplicación
    }
    multiplicando++; // Incrementa el multiplicando para avanzar a la siguiente tabla de multiplicar
    console.log("\n"); // Agrega una línea en blanco entre las tablas de multiplicar
  }
}
presentarTablas(); // Llama a la función para presentar las tablas de multiplicar

/*Version del codigo: JavaScriptV1
Autores: Juan Sebastian Tamayo Cuadrado
Nombre del lenguaje utilizado: JavaScript 6.0
Version del lenguaje utilizado: ECMASCRIPT 6.0
Universidad tecnologica de pereira
Programa de Ingenieria de Sistemas y Computacion
La función presentarTablas() genera y muestra las tablas de multiplicar del 1 al 10. 
Utiliza dos bucles while anidados: el bucle externo itera a través de los multiplicandos del 1 al 10, mientras que el bucle interno itera a través de los multiplicadores del 1 al 10 para cada multiplicando. 
Dentro del bucle interno, se imprime cada multiplicación, seguida de un salto de línea. 
Al final de cada tabla de multiplicar, se imprime una línea en blanco para separarlas.*/
