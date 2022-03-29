import styles from '../styles/Header.module.css';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className={ styles.header }>
        <div className="contenedor">
          <div className={ styles.barra }>
            <Link to='/'>
              <h1 className="heading">Alquiler de Peliculas</h1>
            </Link>

        
            <nav className={ styles.navegacion }>
              <Link to='/'>Inicio</Link>
              <Link to='/mis-pelis'>Mis Pelis</Link>
            </nav>
          </div>
        </div>

      </header>
      <div className='contenedor'>
        <Outlet />
      </div>
    </div>
  )
}

export default Header;