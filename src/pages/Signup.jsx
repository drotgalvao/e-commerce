import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Signup = () => {
  return (
    <>
      <Meta title={"Registrar-se"} />
      <BreadCrumb title="Registrar-se" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Registre-se</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="name"
                  placeholder="Primeiro Nome"
                />
                <CustomInput
                  type="text"
                  name="name"
                  placeholder="Ultimo Nome"
                />
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Numero de Telefone"
                />
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Senha"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Registrar</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
