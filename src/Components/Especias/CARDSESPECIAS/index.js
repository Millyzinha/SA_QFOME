import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { FaCartPlus } from 'react-icons/fa'


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
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn-carrinho border-0"
          rel="noreferrer"
        >
        </a>
        <div class="CardContent">
          <span class="price">R$&nbsp;16,39</span>
          <div
            class="sc-iTONeN eXHrV">
              <div class="inputMenosMais"><svg className="inputMenosMais" xmlns="http://www.w3.org/2000/svg"
              width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256"
                fill="none"></rect>
                <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="24"></line>
                  </svg>1<svg className="inputMenosMais" xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                    fill="currentColor" viewBox="0 0 256 256">
                      <rect width="256" height="256" fill="none"></rect>
                      <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="24"></line>
                      <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="24"></line>
                        </svg>
                        </div>
                        <div class="carrinhoo"><svg className="inputMenosMais" xmlns="http://www.w3.org/2000/svg"
                          width="22" height="22" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M223.9,65.4l-12.2,66.9A24,24,0,0,1,188.1,152H72.1l4.4,24H184a24,24,0,1,1-24,24,23.6,23.6,0,0,1,1.4-8H102.6a23.6,23.6,0,0,1,1.4,8,24,24,0,1,1-42.2-15.6L34.1,32H16a8,8,0,0,1,0-16H34.1A16,16,0,0,1,49.8,29.1L54.7,56H216a7.9,7.9,0,0,1,6.1,2.9A7.7,7.7,0,0,1,223.9,65.4Z"></path></svg>
                         
                          </div>
                          </div>
                          </div>



        {/* <div class="sc-iAvgwm igCIwb"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>1<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg></div>
        < FaCartPlus className='carrinho' onClick={() => window.location.href = `/carrinho/1`} /> */}
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