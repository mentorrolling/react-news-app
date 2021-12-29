import React, { useState } from "react";
import NewsLineApi from "../components/NewsLineApi";

import { useGetNoticiasByCategoryQuery } from "../services/noticias";

const NewsCategoryScreen = () => {
  const [category, setCategory] = useState("technology");

  const { data, error, isFetching } = useGetNoticiasByCategoryQuery(category);

  const handleSelect = ({ target }) => {
    setCategory(target.value);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-6 offset-md-3">
          <h1>📰Noticias Api App</h1>
          <div className="mt-3">
            <h3 className="mb-2">Categoría</h3>
            <select
              className="form-select"
              aria-label="Default select example"
              value={category}
              onChange={handleSelect}
            >
              <option value="business">Business</option>
              <option value="entertainment">Entertainment</option>
              <option value="general">General</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        {error ? (
          <h3>No se pudieron recuperar los datos</h3>
        ) : isFetching ? (
          <div className="col-12 col-md-6 offset-md-3">
            <h3 className="mt-5">Cargando...</h3>
          </div>
        ) : (
          <NewsLineApi noticias={data.articles} />
        )}
      </div>
    </div>
  );
};

export default NewsCategoryScreen;
