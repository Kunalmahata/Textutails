import React from "react";
// @@ -3,7 +3,7 @@ import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
      // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
              <a className="navbar-brand" href="/">{props.title}</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
{/* @@ -20,8 +20,13 @@ export default function Navbar(props) { */}
                   {/* </ul>  */}
                  {/* <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button className="btn btn-primary" type="submit">Search</button>
                      <button cla
                      ssName="btn btn-primary" type="submit">Search</button>
                  </form> */}
                  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                  </div>
              </div>
           </nav>
      // </nav>
  );
      }