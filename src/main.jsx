import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

//IMPORTANDO OS COMPONENTES

// import { Menu } from './Menu';
import Buscas from './Pages/Buscas/Buscas';
import Inicio from './Pages/Inicio/Inicio';
import Forms from './Pages/Login/Forms';
import Editar from './Pages/Editar';
import Cadastro from "./Pages/Cadastro/Cadastro";



// CRIANDO AS ROTAS

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Inicio />} />
      <Route path="/buscas" element={<Buscas />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Forms />} />
      <Route path="/agendamentos" element={<Editar/>} />
    </>
  )
);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

