import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './pages/Home/Home'
import { Contato } from './pages/Contato/Contato'
import { Sobre } from './pages/Sobre/Sobre'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <Contato/>
    <Sobre/>
  </StrictMode>,
)
