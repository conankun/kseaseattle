import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'

import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <header className="header-static navbar-sticky navbar-light">
        <nav className="navbar navbar-expand-lg">
          <div className="container">

            <Link className="navbar-brand" to="/">
              <img src="img/logos/ksea.png" className="logo" /> KSEA Seattle
            </Link>
            
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
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
