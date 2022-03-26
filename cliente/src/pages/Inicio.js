import {useState, useEffect} from 'react';
import Pelicula from '../components/Pelicula';
import clienteAxios from '../config/clienteAxios';

const Inicio = () => {

  const [peliculas, setPeliculas] = useState([]);

  useEffect(()=>{
    const cargarPeliculas = async()=>{
      const { data } = await clienteAxios.get('/peliculas');
      setPeliculas(data.pelis);
    }

    cargarPeliculas();
  },[]);

  return (
    <>
        <h1 className='heading'>Peliculas</h1>
        <p>Escoge la pelicula que deseas alquilar</p>
        {
          peliculas.map(pelicula => (
            <Pelicula 
              key={pelicula.id_pelicula}
              pelicula={ pelicula }
            />

          ))
        }
    </>
  )
}

export default Inicio;