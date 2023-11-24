const express = require('express')
const  cors = require('cors')
const { dbConection } = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuarioPath = '/Profesionales' //Ruta de la API
        this.middLewares()
        this.routes()
        this.conectarDB()
    }

    listen(){
        this.app.listen(
            this.port, () => {
                console.log('Escuchando por el puerto '+this.port)
            } 
        )
    }
    routes(){
        this.app.use(this.usuarioPath, require('../routes/profesionalesVol'))
    }

    async conectarDB(){
        await dbConection()
    }

    middLewares(){
        this.app.use(cors()); //Indicar uso cors
    }



}

module.exports = {Server} //Exportación de la clase