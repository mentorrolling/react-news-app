import React, { useEffect, useState } from "react";
import NewsLine from "../components/NewsLine";
import { getNews } from "../helpers/fetchNews";

const NewsScreen = () => {
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
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Noticias App</h1>
        </div>
      </div>
      <div className="row">
        {noticias.loading ? (
          <h3>Cargando...</h3>
        ) : (
          // <span>Datos recibidos</span>
          <NewsLine noticias={noticias} />
        )}
      </div>
    </div>
  );
};

export default NewsScreen;
