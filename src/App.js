import React from 'react'
import { Link } from 'react-router-dom'
import Index from 'pages/Index'

import './App.css'

function App() {
  return (
    <>
    <header className="header-static navbar-sticky navbar-light">
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          <a className="navbar-brand" to="#top">
            <img src={process.env.PUBLIC_URL + "/img/logos/ksea.png"} className="logo" /> KSEA Seattle
          </a>
            
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#profile">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#profile">People</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#profile">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#profile">NMSC (전미수학과학경시대회)</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#profile">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <Index />
    </>
  )
}

export default App
