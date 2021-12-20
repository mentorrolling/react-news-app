import { useRef, useState, useEffect } from "react";
import { getNews } from "../helpers/fetchNews";

const useFetch = () => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
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
        setState({
          loading: false,
          datos: respuesta.articles,
        });
      }
    });
  }, []);

  return state;
};

export default useFetch;
