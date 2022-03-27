const {Router} = require('express');
const { getPeliculas, alquilarPeli } = require('../controllers/')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

// Creación de Rutas

// get
router.get('/', getPeliculas );

router.post('/alquilar-peli', [
    check ('fecha_alquiler', 'el fecha_alquiler es obligatorio' ).not().isEmpty(),
    check ('fecha_devolucion', 'el fecha_devolucion es obligatorio' ).not().isEmpty(),
    // check ('ejemplar_id', 'el ejemplar_id es obligatorio' ).not().isEmpty(),
    check ('identificacion', 'el identificacion es obligatorio').not().isEmpty(),
    check ('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check ('direccion', 'el direccion es obligatorio').not().isEmpty(),
    check ('telefono', 'el telefono es obligatorio').not().isEmpty(),
    check ('correo', 'el correo es obligatorio').not().isEmpty(),
    check ('pelicula_id', 'el pelicula_id es obligatorio').not().isEmpty(),
    validarCampos 
],
alquilarPeli );



module.exports = router;