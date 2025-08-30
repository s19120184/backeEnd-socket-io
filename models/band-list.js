const Band = require("./band");



class BandList {

    
     constructor() {
        this.bands = [
            new Band('Metallica'),
            new Band('Ghost'),
            new Band('Judas Priest'),
            new Band('Opheth')
        ]
        
     }

     //agregar
     addBand (name){
        const newBand = new Band(name)
        this.bands.push(newBand)
        return this.bands
     }

     //eliminar
     removeBand(id){
        this.bands = this.bands.filter(band => band.id !== id)
     }

     //obtener
     getBands(){
        return this.bands
     }

     //incrementar los votos de la banda
     increseVotes (id){
        this.bands = this.bands.map(band =>{
             if(band.id ===id){
                band.votes +=1
             }
             return band
        })
     }

     decreseVotes (id){
        this.bands = this.bands.map(band =>{
             if(band.id ===id){
                band.votes -=1
             }
             return band
        })
     }

     //cambiar el nombre de la banda
     changeName(id, newName){
        this.bands = this.bands.map(band =>{
             if(band.id ===id){
                band.name = newName
             }
             return band
        })
     }
}

module.exports =  BandList