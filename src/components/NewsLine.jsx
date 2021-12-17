import React from "react";
import moment from "moment";

const NewsLine = ({ noticias }) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <h4>Últimas noticias</h4>

          <ul className="timeline">
            {noticias.datos.map((noticia, index) => (
              <li key={index}>
                <a
                  className="link_noticias"
                  target="_blank"
                  href={noticia.url}
                  rel="noreferrer"
                >
                  {noticia.title}
                </a>
                <p>{moment(noticia.publishedAt).format("LLL")}</p>
                <p>{noticia.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsLine;
