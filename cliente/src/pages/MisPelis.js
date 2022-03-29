import { useState } from 'react';
import clienteAxios from '../config/clienteAxios';

const MisPelis = () => {
    const [documento, setDocumento] = useState('');

    const handleSubmit = async e=>{
        e.preventDefault();
        try {
            const  {data}  = await clienteAxios.get('/peliculas/mis-pelis', {params: {documento}} );
            console.log(data);
            
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
        <h2>Mis Peliculas</h2>
        <p>Administra tus Peliculas buscando por tu documento</p>

        <form onSubmit={e=> handleSubmit(e)}>
            <label>Documento:</label>
            <input 
                type='text'
                name='documento'
                onChange={e=> setDocumento(e.target.value)}
                
            />
            <button
                type='submit'
            >
                Buscar
            </button>
        </form>
    </>
  )
}

export default MisPelis;