import React, {useState} from "react"
import { Link } from "react-router-dom"
import './login.css'
import Logar from "./loginImg.jpg"
import Logo from "../Header/logo.png"



const Login = () => {
     
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        if (email == "adm" && password == "123") {
            window.location.href = "./admin"
        }else{
        if (email && password != "") {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
            const response = await fetch('http://localhost:3001/api/login/user', requestOptions)
            if(response.status === 400){
            alert("Erro! Usuário não encontrado")
            }else{
             
              const data = await response.json()
                setUsers(data)
                window.location.href= "./index"
                }
        }catch(error){
            console.log(error)
                }
   }}}

    return (
        <>
        <div className="navbar3">
         <div className="logo3">
         <img src={Logo} alt="LogoCircular" className='h-logo3'/>
    </div>
    </div>
     <div className="main-login">
        <div className="left-login">
            <h1>Estavamos esperando por você, faça seu login</h1>
            <img src={Logar} alt="loginImg.jpg" className="entregador"/>
        </div>
        <div className="right-login"></div>
            <div className="card-login">
                <h1>Logar usuário</h1>
               <div className="textlogin">
                    <label for="usuarioL">Nome de usuário</label>
                    <input type="text"></input>
               </div>
               <div className="textlogin">
                    <label for="senhaL">Senha</label>
                    <input type="password"></input>
                    <button className="bot-login">Logar</button>
               </div>
               <p>Não possui uma conta?<Link to='/Cadastro'>Cadastre-se</Link></p>

            </div>
    </div>
    </>
    )
}

export default Login;