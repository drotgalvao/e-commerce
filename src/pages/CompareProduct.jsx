import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Produtos"} />
      <BreadCrumb title="Compare Produtos" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Relogio Smart Watch</h5>
                <h6 className="price mb-3 mt-3">R$600,00</h6>
              </div>
              <div className="product-details">
                <h5>Marca:</h5>
                <p>Apple</p>
              </div>
              <div className="product-details">
                <h5>Tipo:</h5>
                <p>Watch</p>
              </div>
              <div className="product-details">
                <h5>Disponibilidade:</h5>
                <p>Em Estoque</p>
              </div>
              <div className="product-details">
                <h5>Cor:</h5>
                <Color />
              </div>
              <div className="product-details">
                <h5>Tamanho:</h5>
                <div className="d-flex gap-10">
                  <p>S</p>
                  <p>M</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Relogio Smart Watch</h5>
                <h6 className="price mb-3 mt-3">R$600,00</h6>
              </div>
              <div className="product-details">
                <h5>Marca:</h5>
                <p>Apple</p>
              </div>
              <div className="product-details">
                <h5>Tipo:</h5>
                <p>Watch</p>
              </div>
              <div className="product-details">
                <h5>Disponibilidade:</h5>
                <p>Em Estoque</p>
              </div>
              <div className="product-details">
                <h5>Cor:</h5>
                <Color />
              </div>
              <div className="product-details">
                <h5>Tamanho:</h5>
                <div className="d-flex gap-10">
                  <p>S</p>
                  <p>M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
