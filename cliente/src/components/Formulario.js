import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const Formulario = () => {
  return (
    <div>
        <h3>Agrega tu pelicula</h3>

        <Formik
            initialValues={{
            }}
            enableReinitialize={true}
        >
            <Form>
                <div>
                    <label
                        htmlFor='titulo'
                    >Pelicula:</label>
                    <Field
                        className=''
                        type='text'
                        id='titulo'
                        name='titulo'
                    />
                </div>
                <div>
                    <label
                        htmlFor='fecha-inicial'
                    >Fecha Inicial:</label>
                    <Field
                        className=''
                        type='date'
                        id='fecha-inicial'
                        name='fecha-inicial'
                    />
                </div>
                <div>
                    <label
                        htmlFor='fecha-entrega'
                    >Fecha de Entrega:</label>
                    <Field
                        className=''
                        type='date'
                        id='fecha-entrega'
                        name='fecha-entrega'
                    />
                </div>
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
                </div>
                <div>
                    <label
                        htmlFor='telefono'
                    >Telefono:</label>
                    <Field
                        className=''
                        type='text'
                        id='telefono'
                        name='telefono'
                    />
                </div>
                <div>
                    <label
                        htmlFor='correo'
                    >Correo:</label>
                    <Field
                        className=''
                        type='text'
                        id='correo'
                        name='correo'
                    />
                </div>
            </Form>
        </Formik>
    </div>
  )
}

export default Formulario;