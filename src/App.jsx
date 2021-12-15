import React, { useEffect, useState } from "react";
import { getNews } from "./helpers/fetchNews";

const App = () => {
  const [noticias, setNoticias] = useState({
    loading: true,
    datos: [],
  });

  useEffect(() => {
    getNews().then((respuesta) => {
      console.log(respuesta.articles);
      setNoticias({
        loading: false,
        datos: respuesta.articles,
      });
    });
  }, []);

  //funciones

  return (
    <div>
      <h1>Noticias App</h1>
      {noticias.loading ? <h3>Cargando...</h3> : <span>Datos recibidos</span>}
    </div>
  );
};

export default App;
