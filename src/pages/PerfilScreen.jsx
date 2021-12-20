import React from "react";
import { useSelector } from "react-redux";

import "../css/profile.css";

const PerfilScreen = () => {
  const usuario = useSelector((state) => state.usuario.datos);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3 ">
          <div className="our-team">
            <div className="picture">
              <img
                className="img-fluid"
                src={usuario.imageUrl}
                alt={usuario.name}
              />
            </div>
            <div className="team-content">
              <h3 className="name">{usuario.name}</h3>
              <h4 className="title">{usuario.email}</h4>
            </div>
            <ul className="social">
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fa fa-facebook"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fa fa-twitter"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fa fa-google-plus"
                  aria-hidden="true"
                ></a>
              </li>
              <li>
                <a
                  href="https://codepen.io/collection/XdWJOQ/"
                  className="fa fa-linkedin"
                  aria-hidden="true"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilScreen;
