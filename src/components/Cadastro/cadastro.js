import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./cadastroStyle.css"
import registration from './cadastroImg.jpg'

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
                window.location.href= "./login"


            } catch (error) {
                console.log(error)
                setUsername('')
                setEmail('')
                setPassword('')
            }
        } else {
            alert("Preencha todos os campos")
        }
    }
    return (
        <div className="body">
            <div className="black-box">
                <div className="cadastrar-se" >
                    <img src={registration} alt="GcadastroImg.jpg" className="imgCadastro"/>
                </div>
                <div className="box-input">
                    <div className="cadastro">
                        <h1 className="input-Cconta">Criar Conta</h1>
                        <div className="input-cadastro">
                            <input type="text"
                                placeholder="Nome de Usuário"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="input-email">
                            <input type="text"
                             placeholder="E-mail"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             />
                        </div>
                        <div className="input-senha">
                            <input type="password"
                             placeholder="Senha"
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}
                              />                           
                        </div>
                        {/* <div className="input-ConSenha">
                            <input type="text"
                             placeholder="Confirmar Senha"
                             value={}
                             onChange={(e) => getPassword(e.target.value)}
                             />                            
                        </div> */}
                        <br></br>
                        <div>
                            <button onClick={postUser} className="botao-cadastro"> Cadastre-se </button>
                        </div>
                        <p className="link-login">Já possui uma conta? <Link to='/Login'>Login</Link></p>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Cadastro;
