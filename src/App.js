
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./Components/Principal/index";
// import Almoco from "./Components/Almoco/almoco"
import Doces from "./Components/Doces/doces"
// import Comunicados from "./Components/Comunicado/comunicados"
import Eventos from "./Components/Eventos/eventos";
// import Jantar from "./Components/Jantar/jantar"
import QuemSomos from "./Components/QuemSomos/quemsomos";
import Salgados from "./Components/Salgados/salgado";
import Admin from "./Components/Admin/admin.js"
import Cadastro from "./Components/Cadastro/cadastro";
import Login from "./Components/Login/login";
import Perfil from "./Components/Perfil/perfil";
import Especias from "./Components/Especias/especias";
// import HomeDeslogado from "./Components/HomeDeslogado/homeDeslogado";
import EditarP from "./Components/EditarP/editarperfil";
import Bolo from "./Components/Bolos/bolos";
import Refeicoes from "./Components/Refeicoes/refeicoes"


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
         {/* <Route element={<HomeDeslogado />} path={"/homeDeslogado"} /> */}
         <Route element={<EditarP />} path={"/editarperfil"} />
       </Routes>
     </BrowserRouter>

  );
};
export default App;
