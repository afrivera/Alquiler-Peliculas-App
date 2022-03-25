import { useEffect, useState } from 'react'
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
    <div className="App">
      <Header />
      <h1>Hola Mundo</h1>
    </div>
  );
}

export default App;
