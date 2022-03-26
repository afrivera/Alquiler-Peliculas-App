import { useNavigate } from 'react-router-dom';

const Pelicula = ({ pelicula }) => {

    const { titulo, directore, actore } = pelicula

    const navigate = useNavigate();

    const handleOnclick = ()=>{
        navigate(`alquilar-peliculas/${pelicula.id_pelicula}`)
      }
    return (
        <div>
            <h2>{titulo}</h2>
            <p>Director: <span>{directore.nombre}</span></p>
            <p>Actor: <span>{actore.nombre}</span></p>
            <button
            onClick={ handleOnclick }
            >Alquilar</button>
        </div>
    )
}

export default Pelicula;