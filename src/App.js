
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./components/Principal/index"
import Almoco from "./components/Almoco/almoco"
import Doces from "./components/Doces/doces"
import Comunicados from "./components/Comunicado/comunicados"
import Eventos from "./components/Eventos/eventos"
import Jantar from "./components/Jantar/jantar"
import QuemSomos from "./components/QuemSomos/quemsomos"
import Salgados from "./components/Salgados/salgado"
import Admin from "./components/Admin/admin"
import Cadastro from "./components/Cadastro/cadastro"
import Login from "./components/Login/login"


const App = () => {
  return (

    


     <BrowserRouter>
       <Routes>
        
         <Route element={<Principal />} path={"/"} exact />
         <Route element={<Doces />} path={"/doces"} />
         <Route element={<Salgados />} path={"/salgados"} />
         <Route element={<Almoco />} path={"/almoco"} />
         <Route element={<Jantar />} path={"/jantar"} />
         <Route element={<Eventos />} path={"/eventos"} />
         <Route element={<Comunicados />} path={"/comunicados"} />
         <Route element={<QuemSomos />} path={"/quemSomos"} />
         <Route element={<Admin />} path={"/admin"} />
         <Route element={<Cadastro />} path={"/cadastro"} />
         <Route element={<Login />} path={"/login"} />
       </Routes>
     </BrowserRouter>

  );
};
export default App;
