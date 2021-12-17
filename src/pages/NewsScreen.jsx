import React, { useEffect, useState, useRef } from "react";
import NewsLine from "../components/NewsLine";
import { getNews } from "../helpers/fetchNews";

const NewsScreen = () => {
  const isMounted = useRef(true);

  const [noticias, setNoticias] = useState({
    loading: true,
    datos: [],
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    getNews().then((respuesta) => {
      console.log(respuesta.articles);
      if (isMounted.current) {
        setNoticias({
          loading: false,
          datos: respuesta.articles,
        });
      }
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
