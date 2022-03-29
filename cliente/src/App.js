import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AlquilarPelicula from './pages/AlquilarPelicula';
import Inicio from './pages/Inicio';
import MisPelis from './pages/MisPelis';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Inicio />} />
          <Route path='/alquilar-peliculas/:id' element={ <AlquilarPelicula />} />
          <Route path='/mis-pelis' element={ <MisPelis />} />

        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
