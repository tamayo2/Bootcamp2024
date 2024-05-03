const gameModal = document.getElementById("modal-juego"); //contenido del modal de juego
const textModal = document.getElementById("texto"); //contenido del texto del modal de juego
const gameBtn = document.getElementById("btn-juego"); //boton del modal de juego
const finalModal = document.getElementById("feedback"); //contenido del modal final

function cerrar() { //funcion para cerrar el modal intro
    beat = new Audio('audio/intro.mp3'); //reproducir cancion de inicio
    beat.play();
    window.scrollTo(0, 0); //scrollear al inicio
    let boton = document.getElementById("modal-intro"); //obtener el contenido del modal de inicio
    let body = document.querySelector("body"); //seleccionar la etiqueta body para modificar
    boton.classList.add("hide-modal"); //agregar clase para ocultar el modal
    body.classList.toggle("no-scroll"); //quitar el bloqueo de scroll
}

function updateModal(coupleNumber) {
    window.scrollTo(0, 0);
    let name = coupleSelector(coupleNumber);
    textModal.innerText = setModalText(coupleNumber);
    document.querySelector('body').classList.add('no-scroll') //agregar la etiqueta que bloquea el scroll
    document.querySelector('.modal-' + name).classList.toggle('show-item'); //agregar la clase para la animacion de caida
    gameModal.classList.remove("hide-modal"); //remover la clase que mantiene oculto todo el modal
    setTimeout(() => {
        document.querySelector('.modal-' + name).classList.toggle('show-item'); //quitar la clase para la animacion de caida
        document.querySelector('.modal-' + name).classList.add('hide-modal'); //agregar la clase para la animacion de caida
    }, 3000);
}

function coupleSelector(coupleNumber) { //funcion que me retorna el equivalente de pareja a nombre para la clase modal-(nombre)
    let string = ''
    switch (coupleNumber) {
        case 'pareja004':
            string = 'melchor';
            break;
        case 'pareja006':
            string = 'baltazar';
            break;
        case 'pareja005':
            string = 'gaspar';
            break;
        case 'pareja002':
            string = 'jose';
            break;
        case 'pareja007':
            string = 'pastor';
            break;
        case 'pareja008':
            string = 'mula';
            break;
        case 'pareja003':
            string = 'jesus';
            break;
        case 'pareja001':
            string = 'maria';
            break;
    }
    return string;
}
function winnerModal() { //modal de ganador
    window.scrollTo(0, 0); //scrollear al inicio de la pagina
    beat = new Audio('audio/final.mp3'); //reproducir el audio del final
    beat.play();
    finalModal.classList.remove("hide-modal"); //remover la clase que mantiene oculto todo el modal
    document.querySelector('body').classList.add('no-scroll'); //agregar la clase que bloquea el scroll
}

function final() {
    beat.pause(); //pausar la musica que se este reproduciendo
    window.scrollTo(0, 0); //scrollear al inicio
    let body = document.querySelector("body"); //seleccionar la etiqueta body para modificar
    gameModal.classList.add("hide-modal"); //agregar clase para ocultar el modal
    body.classList.toggle("no-scroll"); //quitar el bloqueo de scroll
    if (cont == 9) location.reload(); //cuando el contador sea 9 recarga la pagina
    if (cont == 8) { //cuando el contador sea 8
        winnerModal(); //ejecuta el modal final
        cont++; //suma uno al contador
    }
}

function copy () //funcion para copiar en portapapeles
{
    navigator.clipboard.writeText('https://github.com/tamayo2/TercerCursoCodingBootcampUTP2024-1.git');
}