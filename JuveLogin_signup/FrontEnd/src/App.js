import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import Login from './components/login_component'
import SignUp from './components/signup_component'
import UserDetails from './components/userdetails_component'


function App() {
  return (
    <Router>
      <div className="App">
        {/*<nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              RproxyRegistration
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>        D'ONT FORGET TO ADD Link to the imports if you undo this */}

        
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
            </Routes>
         
      </div>
    </Router>
  )
}

export default App