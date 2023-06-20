import React from 'react'
import ReactDOM from 'react-dom/client'
import Principal from "./components/Principal"
import Tabela from "./components/Tabela"

import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < Principal />
    < Tabela />
  </React.StrictMode>,
)
