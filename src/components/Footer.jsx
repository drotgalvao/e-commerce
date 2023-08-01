import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Inscreva-se na Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Seu Endereço de Email"
                  aria-label="Seu Endereço de Email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Inscrever-se
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contate-nos</h4>
              <div>
                <address className="text-white fs-6">
                  Av. Mascarenhas de Morais, 150 <br />
                  Recife, Pernambuco <br />
                  CEP: XX.XXX-XXX <br />
                </address>
                <a
                  href="tel:+55 8199996-0014"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +55 81 99996-0014
                </a>
                <a
                  href="mailto:diegohenriquegalvao@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  diegohenriquegalvao@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a href="#">
                    <BsLinkedin className="text-white fs-4" />
                  </a>
                  <a href="#">
                    <BsGithub className="text-white fs-4" />
                  </a>
                  <a href="#">
                    <BsYoutube className="text-white fs-4" />
                  </a>
                  <a href="#">
                    <BsInstagram className="text-white fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Informações</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Política de Privacidade
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Política de Reembolso
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Política de Entrega
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">Termos e Condiçoes</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Conta</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Sobre nos</Link>
                <Link className="text-white py-2 mb-1">
                  Perguntas Frequentes
                </Link>
                <Link className="text-white py-2 mb-1">Contato</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Links rapidos</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Relógio</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"></div>
            <p className="text-center mb-0">
              &copy; {new Date().getFullYear()}; Desenvolvido por Diego Galvão
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
