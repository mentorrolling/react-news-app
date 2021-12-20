import React from "react";

const PerfilScreen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3 ">
          <div className="our-team">
            <div className="picture">
              <img className="img-fluid" src="" alt="" />
            </div>
            <div className="team-content">
              <h3 className="name">José</h3>
              <h4 className="title">Gonzalez</h4>
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
