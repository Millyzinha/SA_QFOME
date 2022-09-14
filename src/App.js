import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./components/Principal";
import Almoço from "./components/Almoco/almoco";
import Comunicados from "./components/Comunicado/comunicados";
import Eventos from "./components/Eventos/evetos";
import Jantar from "./components/Jantar/jantar";
import QuemSomos from "./components/QuemSomos/quemsomos";
import Salgados from "./components/Salgados/salgado";
import { FiMenu } from 'react-icons/fi';
import Admin from "./components/Admin/admin";
import Cadastro from "./components/CADASTRO/cadastro";
import Login from "./components/LOGIN/login";

const App = () => {
  return (<div>


     <BrowserRouter>
       <Routes>
         <Route element={<Principal />} path={"/"} exact />
         <Route element={<Doces />} path={"/Doces"} />
         <Route element={<Salgados />} path={"/Salgados"} />
         <Route element={<Almoço />} path={"/Almoco"} />
         <Route element={<Jantar />} path={"/Jantar"} />
         <Route element={<Eventos />} path={"/Eventos"} />
         <Route element={<Comunicados />} path={"/Comunicados"} />
         <Route element={<QuemSomos />} path={"/QuemSomos"} />
         <Route element={<Admin />} path={"/Admin"} />
         <Route element={<Cadastro />} path={"/Cadastro"} />
         <Route element={<Login />} path={"/Login"} />
       </Routes>
     </BrowserRouter>
    </div>
  );
};
export default App;
