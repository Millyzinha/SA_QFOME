import React from 'react'
import "./perfil.css"
import Header from '../Header/header'

const Perfil = () => {
    return (
        <div>
            <Header />

            <div className="Perfil">
                <div className="body">
                    <div className="black-box">
                        <div className="seu-perfil" >
                            {/* <img src={registration} alt="GcadastroImg.jpg" className="imgCadastro" /> */}
                        </div>
                        <div className="box-input">
                            <div className="perfil">
                                <h1 className="input-Cconta">Perfil</h1>
                                <div className="input-perfil">
                                    <input type="text"
                                        placeholder="Nome de Usuário"
                                    />
                                </div>
                                <div className="input-email">
                                    <input type="text" placeholder="E-mail" />
                                </div>
                                <div className="input-senha">
                                    <input type="text" placeholder="Senha" />
                                </div>
                                <br></br>
                                <div>
                                   <button OnClick="" className="botao-editarPerfil"> Editar Perfil </button> 
                                   
                                   <a href="editarperfil.js"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Perfil