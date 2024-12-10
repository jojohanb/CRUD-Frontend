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

import Buscas from './Pages/Buscas/Buscas';
import Inicio from './Pages/Inicio/Inicio';
import Forms from './Pages/Login/Forms';
import Cadastro from "./Pages/Cadastro/Cadastro";



// CRIANDO AS ROTAS

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Inicio />} />
      <Route path="/buscas" element={<Buscas />} />
      <Route path="/login" element={<Forms />} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

