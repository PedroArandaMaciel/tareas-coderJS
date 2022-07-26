function suma(numero1 = 0, numero2 = 0) {
    return numero1 + numero2
}
function calcularEntrada(cantidadDeEntradas = 1, edad = "") {
    const PRECIOMAYOR = 900
    const PRECIOMENOR = 450
    if (edad === "mayor") {
        return PRECIOMAYOR * cantidadDeEntradas
    } else if (edad === "menor") {
        return PRECIOMENOR * cantidadDeEntradas
    }
}
function entrada(pelicula, cantMayores, precioReservaMayores, cantMenores, precioReservaMenores, precioFinal) {
    return (`\n*********PELICULA: ${pelicula}\n*\n* ADULTOS: ${cantMayores} Mayores-------->SubTotal: $${precioReservaMayores}\n* CHICOS: ${cantMenores} Menores--------->SubTotal: $${precioReservaMenores}\n*\n*                        PRECIO FINAL: $${precioFinal}\n*********************************************`)
}
function cancelarReserva(idReserva) {
    reservas.splice(idReserva - 1, 1)
    console.log(`La reserva ${idReserva} fue cancelada `)
}
class Reserva {
    constructor(pelicula = "", cantMayor = 0, cantMenor = 0, id) {
        this.Pelicula = pelicula;
        this.Mayores = cantMayor;
        this.Menores = cantMenor;
        this.Id = id;
    }
}
alert("Bienvenido al sistema de reserva de entradas")
const reservas = []
let repetir = true, idReserva = 1
while (repetir) {
    let pelicula, cantMayores = 0, cantMenores = 0, pregunta, precioReservaMayores = 0, precioReservaMenores = 0, precioFinal = 0

    pelicula = parseInt(prompt("SISTEMA DE RESERVA DE ENTRADAS\n Por favor escriba el numero segun corresponda\n 1) El Telefono Negro\n 2) La Casa Embrujada 2\n 3)Los Minions\n 4)Avatar, El Camino Del Agua"))
    cantMayores = parseInt(prompt("Cuantas entradas para MAYORES desea reservar?"))
    cantMenores = parseInt(prompt("Cuantas entradas para MENORES desea reservar?"))

    if ((isNaN(cantMayores) || isNaN(cantMenores)) || (cantMayores === 0 && cantMenores === 0)) {
        alert("Cantidad de entradas ingresada no valida, por favor intente nuevamente")
        console.log("Cantidad no validad")
        continue
    }
    switch (pelicula) {
        case 1:
            pelicula = "El Telefono Negro"
            break
        case 2:
            pelicula = "La Casa Embrujada"
            break
        case 3:
            pelicula = "Los Minions"
            break
        case 4:
            pelicula = "Avatar, El Camino Del Agua"
            break
        default:
            alert("Pelicula no valida, por favor intente de nuevo")
            console.log("Ingreso de pelicula no valida")
            continue
    }
    const reserva = new Reserva(pelicula, cantMayores, cantMenores, idReserva)
    reservas.push(reserva)
    idReserva++
    if (cantMayores > 0) {
        precioReservaMayores = calcularEntrada(cantMayores, "mayor")
    }
    if (cantMenores > 0) {
        precioReservaMenores = calcularEntrada(cantMenores, "menor")
    }
    precioFinal = suma(precioReservaMayores, precioReservaMenores)
    console.log(entrada(pelicula, cantMayores, precioReservaMayores, cantMenores, precioReservaMenores, precioFinal))
    do {
        pregunta = prompt("Gracias por su reserva! Desea realizar otra? (SI/NO)").toLowerCase()
    } while (pregunta != "si" && pregunta != "no")
    if (pregunta == "no") {
        repetir = false
        alert("Gracias por utilizar nuestros servicios, puede revisar su reserva en la consola presionando: F12>console")
    }
}
console.log(reservas)
cancelarReserva(1)
console.log(reservas)

if (reservas.length > 0) {
    const divEntradas = document.getElementById("divEntradas")
    reservas.forEach(reserva => {
        divEntradas.innerHTML += `
    <div class="cardReserva" id="reserva${reserva.Id}">
    <p>Pelicula: ${reserva.Pelicula}</p>
    <p>Mayores: ${reserva.Mayores}</p>
    <p>Menores: ${reserva.Menores}</p>
    <p>Numero de Reserva: ${reserva.Id}</p>
    <button id=btnReserva${reservas.length}>CANCELAR RESERVA</button>
    </div>
    `
    })
}



