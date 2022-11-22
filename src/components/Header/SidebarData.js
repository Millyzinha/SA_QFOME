import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {GiCupcake} from "react-icons/gi";
import {MdFastfood} from "react-icons/md";
import {FaHome} from "react-icons/fa"
import {GiForkKnifeSpoon} from "react-icons/gi"
import {GiStairsCake} from "react-icons/gi"
import {GiPartyPopper} from "react-icons/gi"
import {IoIosPeople} from "react-icons/io"
import{GiHotDog} from "react-icons/gi"
import{BsCalculator} from "react-icons/bs"

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Qfome',
    path: '/quemsomos',
    icon: <IoIosPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Doces',
    path: '/doces',
    icon: <GiCupcake />,
    cName: 'nav-text'
  },
  {
    title: 'Bolos',
    path: '/bolos',
    icon: <GiStairsCake />,
    cName: 'nav-text'
  },
  {
    title: 'Salgados',
    path: '/salgados',
    icon: <GiHotDog/>,
    cName: 'nav-text'
  },
  {
    title: 'Especiais',
    path: '/especias',
    icon: <MdFastfood />,
    cName: 'nav-text'
  },
  {
    title: 'Refeições',
    path: '/refeicoes',
    icon: <GiForkKnifeSpoon/>,
    cName: 'nav-text'
  },
  {
    title: 'Eventos',
    path: '/eventos',
    icon: <GiPartyPopper />,
    cName: 'nav-text'
  },
  {
    title: 'Calculadora',
    path: '/calculadora',
    icon: <BsCalculator />,
    cName: 'nav-text'
  },

];