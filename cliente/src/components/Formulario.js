import { Formik, Form, Field } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import clienteAxios from '../config/clienteAxios';
import Alerta from './Alerta';

const Formulario = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const nuevaPeliculaSchema = Yup.object().shape({
        identificacion: Yup.string()
                           .required('Este Campo es Obligatorio'),
        nombre: Yup.string()
                           .required('Este Campo es Obligatorio'),
        fechaI: Yup.date()
                           .required('Este Campo es Obligatorio'),
        fechaE: Yup.date()
                           .required('Este Campo es Obligatorio'),
        direccion: Yup.string()
                           .required('Este Campo es Obligatorio'),
        telefono: Yup.string()
                           .required('Este Campo es Obligatorio'),
        correo: Yup.string()
                           .required('Este Campo es Obligatorio'),
    });

    const handleSubmitForm = async valores =>{
        
        try {
            
            valores.pelicula_id = id;
            valores.fecha_alquiler=valores.fechaI
            valores.fecha_devolucion = valores.fechaE
            const { data } = await clienteAxios.post('/peliculas/alquilar-peli', valores);
            console.log(data);
            navigate('/');
            
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <div>
            <h3>Agrega tu pelicula</h3>

            <Formik
                initialValues={{
                    identificacion: '',
                    nombre: '',
                    fechaI: '',
                    fechaE: '',
                    direccion: '',
                    telefono: '',
                    correo: '',
                }}
                onSubmit={ async(values, { resetForm})=>{
                    handleSubmitForm( values );
                    resetForm();
                }}
                enableReinitialize={true}
                validationSchema={nuevaPeliculaSchema}
            >
                {({errors, touched})=>{
                    return(
                        <Form>
                <div>
                        <label
                            htmlFor='identificacion'
                        >Identificación:</label>
                        <Field
                            className=''
                            type='text'
                            id='identificacion'
                            name='identificacion'
                        />
                        {
                            (errors.identificacion && touched.identificacion) ?
                            <Alerta>{errors.identificacion}</Alerta>: null
                        }
                    </div>
                    <div>
                        <label
                            htmlFor='nombre'
                        >Nombre Usuario:</label>
                        <Field
                            className=''
                            type='text'
                            id='nombre'
                            name='nombre'
                        />
                        {
                            (errors.nombre && touched.nombre) ?
                            <Alerta>{errors.nombre}</Alerta>: null
                        }
                    </div>
                    <div>
                        <label
                            htmlFor='fechaI'
                        >Fecha Inicial:</label>
                        <Field
                            className=''
                            type='date'
                            id='fechaI'
                            name='fechaI'
                        />
                        {
                            (errors.fechaI && touched.fechaI) ?
                            <Alerta>{errors.fechaI}</Alerta>: null
                        }
                    </div>
                    <div>
                        <label
                            htmlFor='fechaE'
                        >Fecha de Entrega:</label>
                        <Field
                            className=''
                            type='date'
                            id='fechaE'
                            name='fechaE'
                        />
                        {
                            (errors.fechaE && touched.fechaE) ?
                            <Alerta>{errors.fechaE}</Alerta>: null
                        }
                    </div>
                    
                    <div>
                        <label
                            htmlFor='direccion'
                        >Dirección:</label>
                        <Field
                            className=''
                            type='text'
                            id='direccion'
                            name='direccion'
                        />
                        {
                            (errors.direccion && touched.direccion) ?
                            <Alerta>{errors.direccion}</Alerta>: null
                        }
                    </div>
                    <div>
                        <label
                            htmlFor='telefono'
                        >Telefono:</label>
                        <Field
                            className=''
                            type='tel'
                            id='telefono'
                            name='telefono'
                        />
                        {
                            (errors.telefono && touched.telefono) ?
                            <Alerta>{errors.telefono}</Alerta>: null
                        }
                    </div>
                    <div>
                        <label
                            htmlFor='correo'
                        >Correo:</label>
                        <Field
                            className=''
                            type='email'
                            id='correo'
                            name='correo'
                        />
                        {
                            (errors.correo && touched.correo) ?
                            <Alerta>{errors.correo}</Alerta>: null
                        }
                    </div>

                    <input 
                        type='submit'
                        value='Enviar'
                    />
                </Form>
                    )
                }}
                
            </Formik>
        </div>
    )
}

export default Formulario;