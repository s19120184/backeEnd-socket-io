const Ticket = require("./ticket")





class TicketList {

    constructor(){
        this.ultimoNumero=0

        this.pendientes =[]
        this.asignados =[]
    }

    get siguieteNumero(){
        this.ultimoNumero++

        return this.ultimoNumero
    }

    //retornar los ultimos 13 numeros
    get ultimos13(){
        return this.asignados.slice(0,13)
    }

    //crear el ticket
    crearTicket(){
        const nuevoTicket = new Ticket(this.siguieteNumero)
        this.pendientes.push(nuevoTicket)

        return nuevoTicket

    }

    //asignar el ticket a alguien
    asignarTicket (agente ,escritorio ){
        if (this.pendientes.length ===0){
            return null
        }

      
        const siguienteTicket = this.pendientes.shift()

        siguienteTicket.agente= agente
        siguienteTicket.escritorio=escritorio

        //insertamos un nuevo elemento al inicio del arreglo
        this.asignados.unshift(siguienteTicket)

        return siguienteTicket
    }

}

module.exports = TicketList