import React from "react"
import { Link } from "react-router-dom"
import "./cadastro.css"
import registration from '../Cadastro/cadastroImg.jpg'

const Cadastro = () => {
    return (
        <div className="body">
            <div className="black-box">
                <div>
                    <img src={registration} alt="GcadastroImg.jpg" className="cadastrar-se" />
                </div>
                <div className="box-input">
                    <div className="cadastro">
                        <h1>Cadastrar-se</h1>
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
                            <button className="botao-cadastro" type="submit">
                                Cadastrar usuário
                            </button>
                        </div>
                        <p className="link-login">Já possui uma conta?<Link to='/Login'>Login</Link></p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cadastro;
