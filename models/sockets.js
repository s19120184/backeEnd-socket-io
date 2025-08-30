const BandList = require("./band-list");



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
            
        
        });
    }


}


module.exports = Sockets;