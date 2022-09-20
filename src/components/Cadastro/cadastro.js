import React from "react"
import { Link } from "react-router-dom"
import './cadastro.css'

const Cadastro = () =>{
    return(
        <div className="body">
            <div className="black-box">
                <div className="input-cadastro">
                <input type="text"
                placeholder="Nome de Usuário" 
                />
                <input type="text" 
                placeholder="E-mail"
                />
                <input type="text" 
                placeholder="Senha"
                />
                <input type="text" 
                placeholder="Confirmar Senha"
                />
                </div>
                <div className="botao-cadastro">
                <button type="submit">
                Cadastrar-se
                </button>
                </div>
                <p>Já possui uma conta?<Link to= '/Login'>Login</Link></p>
            </div>
            
        </div>
    )
}

export default Cadastro;
