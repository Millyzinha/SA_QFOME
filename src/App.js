
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./components/Principal/index"
import Doces from "./components/Doces/doces"
// import Comunicados from "./components/Comunicado/comunicados"
import Eventos from "./components/Eventos/eventos"
import QuemSomos from "./components/QuemSomos/quemsomos"
import Salgados from "./components/Salgados/salgado"
import Admin from "./components/Admin/admin"
import Cadastro from "./components/Cadastro/cadastro"
import Login from "./components/Login/login"
import Perfil from "./components/Perfil/perfil"
import Especias from "./components/Especias/especias";
import HomeDeslogado from "./components/HomeDeslogado/homeDeslogado";
import EditarP from "./components/EditarP/editarperfil"
import Bolo from "./components/Bolos/bolos"
import Refeicoes from "./components/Refeicoes/refeicoes"

const App = () => {
  return (


     <BrowserRouter>
       <Routes>
        
         <Route element={<Principal />} path={"/"} exact />
         <Route element={<Doces />} path={"/doces"} />
         <Route element={<Salgados />} path={"/salgados"} />
         <Route element={<Bolo />} path={"/bolo"} />
         <Route element={<Refeicoes />} path={"/refeicoes"} />
         <Route element={<Especias />} path={"/especias"} />
         <Route element={<Eventos />} path={"/eventos"} />
         {/* <Route element={<Comunicados />} path={"/comunicados"} /> */}
         <Route element={<QuemSomos />} path={"/quemSomos"} />
         <Route element={<Admin />} path={"/admin"} />
         <Route element={<Cadastro />} path={"/cadastro"} />
         <Route element={<Login />} path={"/login"} />
         <Route element={<Perfil/>} path={'/perfil/:id'}/>
         <Route element={<HomeDeslogado />} path={"/homeDeslogado"} />
         <Route element={<EditarP />} path={"/editarperfil"} />
       </Routes>
     </BrowserRouter>

  );
};
export default App;
