import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './components/layouts/Header/Header.tsx'
import Footer from './components/layouts/Footer/Footer.tsx'

ReactDOM.createRoot(document.body!).render(
  <React.StrictMode>
    <Header/>
    <App />
    <Footer/>
  </React.StrictMode>,
)
