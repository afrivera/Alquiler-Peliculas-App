const { Actores } = require ("./Actor");
const { AlquilarPelicula } = require ("./AlquilarPelicula");
const { Cliente } = require ("./Cliente");
const { Director } = require ("./Director");
const { Ejemplar } = require ("./Ejemplar");
const { Pelicula } = require ("./Pelicula");

Pelicula.belongsTo(Actores,{ foreignKey: 'actor_id'});
Actores.hasMany(Pelicula, { foreignKey: 'actor_id'});

Pelicula.belongsTo(Director,{ foreignKey: 'director_id'});
Director.hasMany(Pelicula, { foreignKey: 'director_id'});

Ejemplar.belongsTo(Pelicula, { foreignKey: 'pelicula_id'});
Pelicula.hasMany(Ejemplar, { foreignKey: 'pelicula_id'});

AlquilarPelicula.belongsTo(Cliente, { foreignKey: 'cliente_id'});
Cliente.hasMany(AlquilarPelicula, { foreignKey: 'cliente_id'});

AlquilarPelicula.belongsTo(Ejemplar, { foreignKey: 'ejemplar_id'});
Ejemplar.hasMany(AlquilarPelicula, { foreignKey: 'ejemplar_id'});


module.exports = {
    Actores,
    AlquilarPelicula,
    Cliente,
    Director,
    Ejemplar,
    Pelicula
}
