import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { Pagina404 } from './pages/Pagina404'
import { Layout } from "../src/pages/Layout"
import { Contato } from "./pages/Contato"
import { Sobre } from "./pages/Sobre"
import { Home } from "./pages/Home"
import './index.css'
import { Estado1 } from './pages/Estado1'

// const rotas = createBrowserRouter([
//   {path: "/", element: <Layout/>},
//   {path: "/home", element: <Home/>},
//   {path: "/sobre", element: <Sobre/>},
//   {path: "/contato", element: <Contato/>},
//  {path: "/estado1", element: <Estado1/>},
//   {path: "*", element: <Pagina404/>}
// ])

const rotas = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='contato' element={<Contato/>}/>
    <Route path='sobre' element={<Sobre/>}/>
    <Route path='estado1' element={<Estado1/>}/>
    <Route path='*' element={<Pagina404/>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rotas}/>
  </StrictMode>,
)
