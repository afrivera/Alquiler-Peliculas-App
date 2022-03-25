const express = require('express');
const cors = require('cors');

const db = require('../bd/db');

class Server{
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT || 4000;

        // Rutas
        this.paths = {
            pelis: '/peliculas'
        }

        // Conexión a la bd
        this.conectarDb();

        // middlewares
        this.middlewares();

        // rutas de aplicación
        this.routes();

    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    async conectarDb(){
        try {
            await db.authenticate();
            console.log('Base de Datos Conectada');

        } catch (error) {
            console.log(error);
        }
    }

    routes(){
        this.app.use( this.paths.pelis, require('../routes/index.js'));
    }

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log(`El servidor está funcionando en el puerto ${ this.PORT}`);
        });
    }
}

module.exports = Server;
