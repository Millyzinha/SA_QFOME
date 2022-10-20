import React from "react"
import { Link } from "react-router-dom"
import './login.css'
import Logar from "../Login/loginImg.jpg"



const Login = () => {
    return (
        <div className="body">
            <div className="every-input">                
            <div className="login-img">
                <img src={Logar} alt="loginImg.jpg" className="img-login" />
                </div>  
            <div className="login-input">
            
                    <h1 className="h1-login">Faça seu Login</h1>
                    <div className="login-usuario">
                    <input type="text"
                        placeholder="Nome de usuário"
                    /> 
                    </div>               
                    <div className="login-senha">
                    <input type="text"
                        placeholder="Senha"
                    />
                </div>
                <div className="botao-login">
                    <button type="submit">
                        Entrar
                    </button>
                </div>                
                <p>Não possui uma conta?<Link to='/Cadastro'>Cadastre-se</Link></p>

                </div>

                
            </div>

        </div>
    )
}

export default Login;