import React, {useState} from "react"
import { Link } from "react-router-dom"
import './login.css'
import Logar from "./loginImg.jpg"



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
        <div className="body">
            
            <div className="every-input">                
            <div className="login-img">
                <img src={Logar} alt="loginImg.jpg" className="img-login" />
                </div>  
            <div className="login-input">
            
                    <h1 className="h1-login">Faça seu Login</h1>
                    <div className="login-usuario">
                    <input type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /> 
                    </div>               
                    <div className="login-senha">
                    <input type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="botao-login">
                    <button onClick={getUsers} className="login-form-btn">Entrar</button>
                </div>                
                <p>Não possui uma conta?<Link to='/Cadastro'>Cadastre-se</Link></p>

                </div>

                
            </div>

        </div>
    )
}

export default Login;