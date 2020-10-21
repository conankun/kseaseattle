import React from 'react'
import Index from 'pages/Index'

import './App.css'

function App() {
  return (
    <>
    <header className="bd-navbar">
      <nav className="navbar fixed-top navbar-light bg-light navbar-expand-lg">
        <div className="container">

          <a className="navbar-brand" to="#top">
            <img src={process.env.PUBLIC_URL + "/img/logos/ksea.png"} className="logo" /> KSEA Seattle
          </a>
            
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#profile">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#people">People</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#news">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#nmsc">NMSC (전미수학과학경시대회)</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main role="main">
      <Index />
    </main>
    </>
  )
}

export default App
