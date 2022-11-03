import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import {FaCartPlus} from 'react-icons/fa'


function Card({ imageSource, name, description, price,url }) {
  return (
    <div className="card text-center animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} width="20" height="120" alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-description">
          {description
            ? description
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
        <h6 className="preco">{price}</h6>
        <a 
          href={url ? url : "#!"}
          target="_blank"
          className="btn-carrinho border-0"
          rel="noreferrer"
        >
        </a>
        < FaCartPlus className='carrinho' onClick={() => window.location.href = `/carrinho/1`} />
      </div>
    </div>
  );
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};

export default Card;