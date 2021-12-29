
import React from "react";
import moment from "moment";

const NewsLineApi = ({noticias}) => {
    return (
        <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 animate__animated animate__fadeIn">
            <h4>Últimas noticias</h4>
  
            <ul className="timeline">
              {noticias.map((noticia, index) => (
                <li key={index} >
                  <a
                    className="link_noticias"
                    target="_blank"
                    href={noticia.url}
                    rel="noreferrer"
                  >
                    {noticia.title}
                  </a>
                  <p>{moment(noticia.publishedAt).format("LLL")}</p>
                   <img className="img-timeline" src={noticia.urlToImage} alt={noticia.title} />
                  <p>{noticia.description}</p>
                </li>
               
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
}

export default NewsLineApi