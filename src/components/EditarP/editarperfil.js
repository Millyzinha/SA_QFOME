import React from 'react'
import './editarperfil.css'
import Header from '../Header/header'

const Editar = () => {
    return (
        <>
        <Header />
        <div className='Editar'>
          <div className='editar-container'>
          <div className='box-editar'>
          <div className='fundo-editar'>
            <div className='foto-editar'></div>
          </div>
          </div>
          <div className='box-editar2'>
            
            <p className='Marcynha'>Marcynha</p>
         
            <div className='inputes'>
              <div className='inpt'>
              <label className='label'>Editar Nome:</label>
            <input  type="text" className='inp_editar' placeholder='Marcyelen Rosa'/>
            </div>
            <div className='inpt'>
            <label className='label'>Alterar email:</label>
            <input  type="text" className='inp_editar' placeholder='marcyelencarvalho@gmail.com'/>
            </div>
            <div className='inpt'>
            <label className='label'>Alterar Senha:</label>
            <input  type="password" className='inp_editar' placeholder='********'/>
            </div>
            </div>
            <div className='cantodolula'>
          <button className='btn_editar'>Salvar alterações</button>
          </div>
          </div>
        
          </div>
        </div>
           
        </>
    )
}

export default Editar