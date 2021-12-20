import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NewsNavbar = () => {
  const usuario = useSelector((state) => state.usuario.datos);
  // console.log(usuario);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          📰 <b>NewsApp</b>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/"
              >
                Noticias
              </NavLink>
            </li>
            <li className="nav-item me-2">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>

            <li>
              <div className="btn-group dropstart">
                <button
                  className=" dropdown-toggle btn btn-secondary"
                  type="button"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                  {usuario.name}
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/perfil">
                      Perfil
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/login">
                      Cerrar sesión
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NewsNavbar;
