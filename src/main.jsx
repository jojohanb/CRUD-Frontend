import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Section from './Section.jsx'
import Lista from './Lista.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Section/>
    <Lista/>
    <Footer />
  </StrictMode>,
)
