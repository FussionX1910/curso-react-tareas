import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TotalProvider } from "./context/TotalContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TotalProvider>
    <App />
    </TotalProvider>
  </React.StrictMode>,
)
