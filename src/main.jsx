import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Pages/Inicio/Header.jsx'
import Footer from './Pages/Inicio/Footer.jsx'
import Section from './Pages/Inicio/Section.jsx'
import Lista from './Pages/Inicio/Lista.jsx'

// import Cadastro from './Cadastro/Cadastro.jsx'

// import Forms from './Pages/Login/Forms.jsx'

// import Header from './Pages/Buscas/Header.jsx'
// import Footer from './Pages/Buscas/Footer.jsx'
// import Lista from './Pages/Buscas/Lista.jsx'
// import Section from './Pages/Buscas/Section.jsx'

// CRIANDO AS ROTAS
// import { createRoot } from 'react-dom/client'
// import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom"; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* PARTE INICIO */}
    <Header />
    <Section/>
    <Lista/>
    <Footer />


{/* PARTE BUSCAS */}
    {/* <Header />
    <Section/>
    <Lista/>
    <Footer /> */}


{/* PARTE LOGIN */}
    {/* <Forms/>


{/* PARTE CADASTRO */}
    {/* <Cadastro/> */}


  </StrictMode>,
)
