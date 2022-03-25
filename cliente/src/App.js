import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import clienteAxios from "./config/clienteAxios";


function App() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(()=>{
    const cargarPeliculas = async()=>{
      const { data } = await clienteAxios.get('/peliculas');
      setPeliculas(data.pelis);
    }

    cargarPeliculas();
  },[])

  return (
    <BrowserRouter>
      <Header />
      <h1>Hola Mundo</h1>
    </BrowserRouter>
  );
}

export default App;
