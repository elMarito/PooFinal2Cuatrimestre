import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppContextProvider } from './context/appContext';
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
// import './index.css'
import './styles/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>,
)
