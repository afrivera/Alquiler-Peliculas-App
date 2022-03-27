const { Pelicula, Actores, AlquilarPelicula, Cliente, Ejemplar, Director } = require('../bd/indexDB');

// Función para obtener las peliculas disponibles
const getPeliculas = async (req, res) => {
    try {
        const pelis = await Pelicula.findAll({
            include: [{
                    model: Actores
                },
                {
                    model: Director
                }
            ]
        });
        res.json({ pelis })
    } catch (error) {
        res.status(500).json({
            msg: 'Error desde el Server',
            error
        })
    }
}

// función para alquilar peliculas
const alquilarPeli= async (req, res)=>{
    const {fecha_alquiler, fecha_devolucion,  identificacion, nombre, direccion, telefono, correo, pelicula_id} = req.body;
    try {
        const cliente = await Cliente.create({
            identificacion, nombre, direccion, telefono, correo
        });

        const ejemplar = await  Ejemplar.create({ pelicula_id });
        const alquiler = await AlquilarPelicula.create({
            fecha_alquiler, fecha_devolucion, cliente_id: cliente.id_cliente, ejemplar_id: ejemplar.id_ejemplar
        });
        
        await Promise.all ([alquiler.save()], cliente.save(), ejemplar.save());
        res.json({
            msg: 'Alquiler creado satisfactoriamente',
            cliente
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error desde el Server',
            error
        })
    }
}


module.exports = {
    getPeliculas,
    alquilarPeli
}