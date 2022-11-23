import React from "react";
import PropTypes from "prop-types";

import "./index.js"
import "./index.css"

function Card({ imageSource, title, preco, url }) {
  return (
        <div className="card text-center  animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} width="120" height="220" alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body ">
        <h4 className="card-title">{title}</h4>
        <h6 className="preco">{preco}</h6>
        <a
          href={url ? url : "#!"}
          target="_self"
          className="button"
          rel="noreferrer"
        >
          visitar
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;