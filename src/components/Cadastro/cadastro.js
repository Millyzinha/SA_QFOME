import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./cadastroStyle.css"
import registration from '../Cadastro/cadastroImg.jpg'
import Logo from "../Header/logo.png"


const Cadastro = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const postUser = async () => {

        if (username && email && password != "") {
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({
                        username: username,
                        email: email,
                        password: password
                    })
                }
                await fetch('http://localhost:3001/api/user', requestOptions)
                alert("cadastro realizado com sucesso")


            } catch (error) {
                console.log(error)
                setUsername('')
                setEmail('')
                setPassword('')
            }
        } else {
            alert("preencha todos os campos")
        }
    }
    return (
       <>
            <div className="navbar3">
             <div className="logo3">
             <img src={Logo} alt="LogoCircular" className='h-logo3'/>
        </div>
        </div>
         <div className="main-cadastro">
            <div className="left-cadastro">
                <h1>Cadastre-se no Qfome  e faça já seu pedido!</h1>
                <img src={registration} alt="cadastroImg.jpg" className="motoboy"/>
            </div>
            <div className="right-cadastro"></div>
                <div className="card-cadastro">
                    <h1>CADASTRAR USUÁRIO</h1>
                   <div className="textfield">
                        <label for="usuario">Nome de usuário</label>
                        <input type="text"></input>
                   </div>
                   <div className="textfield">
                        <label for="e-mail">E-mail</label>
                        <input type="email"></input>
                   </div>
                   <div className="textfield">
                        <label for="e-mail">Senha</label>
                        <input type="password"></input>
                        <button className="bot-cadastro">Cadastrar</button>
                   </div>
                   <p className="link-login">Já possui uma conta? <Link to='/Login'>Login</Link></p>
                </div>
        </div>
        </>
    )
}

export default Cadastro;