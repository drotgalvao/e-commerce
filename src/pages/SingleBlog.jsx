import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dinamico blog nome"} />
      <BreadCrumb title="Dinamico blog nome" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" />
                Voltar
              </Link>
              <h3 className="title">Uma bela manha de segunda renasce</h3>
              <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis pariatur consequatur minima at, laboriosam, nesciunt,
                itaque reprehenderit ex impedit aspernatur omnis eos dolorem
                natus ducimus praesentium? Vitae ut distinctio odio.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
