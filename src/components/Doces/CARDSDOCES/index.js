import React from "react";
import PropTypes from "prop-types";
import "./index.css";
// import {FaCartPlus, FaPlus} from 'react-icons/fa'
import {VscRemove, VscAdd} from 'react-icons/vsc'


function Card({ imageSource, name, description, price, url }) {
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
        {/* <a 
          href={url ? url : "#!"}
          target="_blank"
          className="btn-carrinho border-0"
          rel="noreferrer"
        >
        </a> */}

        <VscAdd className="Adicionar"/>

        <input className="resposta" type={"number"}></input>

        < VscRemove className="Remover"/>

        <button className="buttona">Adicionar</button>
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
  Price: PropTypes.string,
};

export default Card;