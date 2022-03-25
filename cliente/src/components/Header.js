import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={ styles.header }>
      <div className="contenedor">
        <div className={ styles.barra }>
          <h1 className="heading">Alquiler de Peliculas</h1>

      
          <nav className={ styles.navegacion }>
            <Link to='/'>Inicio</Link>
            <Link to='/'>Mis Pelis</Link>
          </nav>
        </div>
      </div>

    </header>
  )
}

export default Header;