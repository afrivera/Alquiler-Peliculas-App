import { useNavigate } from 'react-router-dom';

const Pelicula = ({ pelicula }) => {

    const navigate = useNavigate();

    const handleOnclick = ()=>{
        navigate(`alquilar-peliculas/${pelicula.id_pelicula}`)
      }
    return (
        <div>
            <h2>{pelicula.titulo}</h2>
            <p>Director: <span>{pelicula.directore.nombre}</span></p>
            <p>Actor: <span>{pelicula.actore.nombre}</span></p>
            <button
            onClick={ handleOnclick }
            >Alquilar</button>
    </div>
    )
}

export default Pelicula;