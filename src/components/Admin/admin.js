import React, { useState } from "react";



const Admin = () => {
    const [item, setItem] = useState('')
    const [itemList, setItemList] = useState([])

    const handleChangeItem = (evento) => {
        let newItem = evento.target.value
        setItem(newItem)
    }

    const handleAddItemToList = (evento) => {
        evento.preventDefault()
        if(item) {
            setItemList([...itemList, item])
            setItem('')
        }
    }

  return (
    <div>
        <h1>Gerenciamento de Itens</h1>
        
        <div className="almoço">
            <h2>Almoço</h2>
            <div className="divAdmin">
                <form>
                    <input type='text'
                    value={item}
                    onChange={handleChangeItem}
                    placeholder='Adicionar Item' 
                    />
                    <button type="submit"
                    onClick={handleAddItemToList}>
                        Adicionar
                    </button>
                </form>
            </div>
            <div className="listaItens">
                <ul>
                    {itemList.map((item, key) => (<li key={key}>{item}</li>))}
                </ul>
            </div>

        </div>
    </div>
  );
};

export default Admin;