import React from "react";
import GoogleLogin from "react-google-login";

import portada from "../assets/login.jpg";

const LoginScreen = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="container container-login">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4 d-none d-md-block">
                <img src={portada} className="img-fluid h-100" alt="portada" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Inicio de sesión</h5>
                  <form>
                    <label>Email</label>
                    <input className="form-control mb-2" type="email" />
                    <label>Password</label>
                    <input className="form-control mb-2" type="text" />
                    <div className="d-flex justify-content-end">
                      <button className="btn btn-primary">Iniciar</button>
                    </div>
                  </form>
                  <div className="text-center mt-3 ">
                    <GoogleLogin
                      clientId="877760850378-p3nmpgvh2e1fcjsg7kdr7avdfdvs47dp.apps.googleusercontent.com"
                      buttonText="Iniciar sesión con Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
