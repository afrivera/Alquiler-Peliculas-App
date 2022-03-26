import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AlquilarPelicula from './pages/AlquilarPelicula';
import Inicio from './pages/Inicio';


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Inicio />} />
          <Route path='/alquilar-peliculas/:id' element={ <AlquilarPelicula />} />

        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
