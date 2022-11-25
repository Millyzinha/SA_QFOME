
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
import Admin from "./Components/Admin/admin"
import Cadastro from "./Components/Cadastro/cadastro";
import Login from "./Components/Login/login";
import Perfil from "./Components/Perfil/perfil";
import Especias from "./Components/Especias/especias";
import HomeDeslogado from "./Components/HomeDeslogado/homeDeslogado.js";
import EditarP from "./Components/EditarP/editarperfil";
import Bolos from "./Components/Bolos/bolos";
import Refeicoes from "./Components/Refeicoes/refeicoes"
import Novidades from "./Components/HomeDeslogado/novidades/novidades"
import Calculadora from "./Components/Calculadora/index"
import Carrinho from "./Components/Carrinho/carrinho";


const App = () => {
  return (


     <BrowserRouter>
       <Routes>
         <Route element={< HomeDeslogado />} path={"/"} exact />
         <Route element={<Principal />} path={"/home"} />
         <Route element={<Doces />} path={"/doces"} />
         <Route element={<Salgados />} path={"/salgados"} />
         <Route element={<Bolos />} path={"/bolos"} />
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
         <Route element={<Novidades />} path={"/novidades"} />
         <Route element={<Calculadora />} path={"/calculadora"} />
         <Route element={<Carrinho/>} path={"/carrinho"} />
       </Routes>
     </BrowserRouter>

  );
};
export default App;
