import React from "react"
import { Link } from "react-router-dom"
import './login.css'


const Login = () =>{
    return(
        <div className="body">
            <div className="black-box">
                <div className="input-login">
            <input type="text" 
            placeholder="E-mail"
            />
            <input type="text" 
            placeholder="Senha"
            />
                </div>
                    <div className="botao-login">
            <button type="submit">
                Entrar
            </button>
                    </div>
            <p>Não possui uma conta?<Link to= '/Cadastro'>Cadastre-se</Link></p>
            </div>

        </div>
    )
}

export default Login;