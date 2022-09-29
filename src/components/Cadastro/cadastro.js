import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./cadastro.css"
import registration from '../Cadastro/cadastroImg.jpg'

const Cadastro = () => {

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const postUser = async () => {  

        if (username && name && email && password !== "") {
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({
                        username: username,
                        name: name,
                        email: email,
                        password: password
                    })
                }
                await fetch('http://localhost:3000/api/user', requestOptions)
           
                
            }catch( error){
                console.log(error)
                setUsername('')
                setName('')
                setEmail('')
                setPassword('')
            }
        }else{
          alert("preencha todos os campos")
            }
        }
    return (
        <div className="body">
            <div className="black-box">
                <div>
                    <img src={registration} alt="GcadastroImg.jpg" className="cadastrar-se" />
                </div>
                <div className="box-input">

                    <div className="cadastro">
                    <h1 className="nome-cadastro">Cadastrar-se</h1>
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
                        <br></br>
                        <div>
                        <button  onClick={postUser} className="botao-cadastro"> Cadastre-se </button>
                        </div>
                        <p className="link-login">Já possui uma conta? <Link to='/Login'>Login</Link></p>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Cadastro;