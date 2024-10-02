import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Sobre } from "./pages/Sobre";
import { Pagina404 } from "./pages/Pagina404";
import { Layout } from "./pages/_Layout";
import { SemEstado } from "./pages/estado/SemEstado";
import { ComEstado } from "./pages/estado/ComEstado";
import { CampoTexto } from "./pages/estado/CampoTexto";
import { Contador } from "./pages/estado/Contador";
import {ComunicacaoDireta} from "./pages/comunicacao/ComunicacaoDireta"
import {ComunicacaoIndireta} from "./pages/comunicacao/ComunicacaoIndireta"



// const rotas = createBrowserRouter([
//   {path:"/", element: <Layout/>},
//   {path:"/home", element: <Home/>},
//   {path:"/contato", element: <Contato/>},
//   {path:"/sobre", element: <Sobre/>},  
//   {path:"/semestado", element: <semEstado/>},  
//   {path:"/comestado", element: <ComEstado/>},  
//   {path:"/campoTexto", element: <CampoTexto/>},  
//   {path:"/contador", element: <Contador/>},  
//   {path:"/comunicacaodireta", element: <ComunicacaoDireta/>},  
//   {path:"/comunicacaoindireta", element: <ComunicacaoIndireta/>},  
//   {path:"*", element: <Pagina404/>}
// ])

const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="contato" element={<Contato />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="semEstado" element={<SemEstado />} />
      <Route path="comEstado" element={<ComEstado />} />
      <Route path="campoTexto" element={<CampoTexto />} />
      <Route path="contador" element={<Contador />} />
      <Route path="comunicacaodireta" element={<ComunicacaoDireta />} />
      <Route path="comunicacaoindireta" element={<ComunicacaoIndireta />} />
      <Route path="*" element={<Pagina404 />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);
