import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
        <div className="blog-card">
          <div className="card-image">
            <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
          </div>
          <div className="blog-content">
            <p className="date">1 de Dez, 2023</p>
            <h5 className="title">Uma bela manha renasce</h5>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
              id dolores. Odio exercitationem
            </p>
            <Link to="/blog/:id" className="button">
              Leia Mais
            </Link>
          </div>
        </div>
    </>
  );
};

export default BlogCard;
