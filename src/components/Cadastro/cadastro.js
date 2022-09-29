import React, {useState} from "react"
import { Link } from "react-router-dom"
import './cadastro.css'

const Cadastro = () =>{

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const postUser = async () => {  

        if (username && name && email && password != "") {
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
                <button  onClick={postUser} className="login-form-btn"> Cadastre-se </button>
                </div>
                <p>Já possui uma conta?<Link to= '/Login'>Login</Link></p>
            </div>
            
        </div>
    )
}

export default Cadastro;
