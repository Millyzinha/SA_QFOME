import React, { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../Header/logo.png"
import "./carrinho.css"


const Carrinho = () => {

return (
    <>
         <div className="navbar3">
          <div className="logo3">
          <img src={Logo} alt="LogoCircular" className='h-logo3'/>
     </div>
     </div>
            <div className="carrinho-main">
                <div className="pedido">
                    <h2>Finalize seu pedido</h2>
                    <div className="info">
                        <p className="tex-info">Informe o endereço para a entrega</p>
                        <div>
                        <div className="input-cep">
                            <input type="text" placeholder="CEP" name="cep"/>
                        </div>
                        <div className="input-rua">
                            <input type="text" placeholder="RUA" name="rua"/>
                        </div>
                        <div className="input-NC">
                        <div className="input-numero">
                            <input type="text" placeholder="NÚMERO" name="numero"/>
                        </div>
                        <div className="input-complemento">
                            <input type="text" placeholder="COMPLEMENTO" name="complemento"/>
                        </div>
                        </div>
                        <div className="input-BCU">
                        <div className="input-bairro">
                            <input type="text" placeholder="BAIRRO" name="bairro"/>
                        </div>
                        <div className="input-cidade">
                            <input type="text" placeholder="CIDADE" name="cidade"/>
                        </div>
                        <div className="input-uf">
                            <input type="text" placeholder="UF" name="uf"/>
                        </div>
                        </div>
                    </div>
                    </div>
                   
                </div>
            </div>
     </>
 )
}

export default Carrinho;