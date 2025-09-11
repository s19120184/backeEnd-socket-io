const BandList = require("./band-list");
const TicketList = require("./ticket-list");



class Sockets {

    constructor( io ) {

        this.io = io;

        //instacia de bandList
        this.bandlist = new BandList()


        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

           console.log("cliente conectado")
           //Emitir al cliete conectado todas las bands actuales

            socket.emit("current-bands", this.bandlist.getBands())

            
            //votar por la banda
            socket.on('votar-banda',(id)=>{
                this.bandlist.increseVotes(id)
                //enviamos la informacion actualizada
                this.io.emit("current-bands", this.bandlist.getBands())
            })


            //borrar banda 
            socket.on('borrar-banda',(id)=>{
                this.bandlist.removeBand(id)
                //enviamos informacion actualizada
                this.io.emit('current-bands', this.bandlist.getBands())
            })

            socket.on('nueva-banda',(name)=>{
                this.bandlist.addBand(name)
                //reenviamos la informacion actualizada
                this.io.emit('current-bands',this.bandlist.getBands())
            })

            //cambiar el nombre de la banda
            socket.on("cambiar-nombre",(data)=>{
                const {id,name} = data
                this.bandlist.changeName(id,name)
                this.io.emit('current-bands',this.bandlist.getBands())

            })

            /**Evenntos para la seccion de tickets */
            
            //crear la instancia de nustro ticketList
            this.ticketList = new TicketList()


            socket.on('solicitar-ticket',(data, callback)=>{
                const nuevoticket = this.ticketList.crearTicket()
                callback(nuevoticket)
            })

            socket.on('siguiente-ticket-trabajar',(usuario,callback)=>{
               const {agente,escritorio} = usuario
               const suTicket = this.ticketList.asignarTicket(agente,escritorio)
               
               callback(suTicket)

               //emitimos los ultimos 13 tickets
               this.io.emit('ticket-asignado',this.ticketList.ultimos13)
            })
            
        
        });
    }


}


module.exports = Sockets;