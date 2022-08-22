import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Color(e)
{
let val = e.target.value;
document.body.style.backgroundColor = val;

}


export default function Navbar(props) 
{

  const darkColor = {
    one: '#243447',
    two: '#141d26',
    three: '#79163b'
  }

    return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>

      </ul>
      {/*<form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>*/}
    
    {/*Button group*/}
    <div className="btn-group mx-5 btn-group-lg" role="group" aria-label="Basic mixed styles example" style = {{display: props.mode==='dark'?'block':'none',
                                                                                              border: props.mode==='dark'?'2px solid white':'none'}}>
      <button type="button" className="btn py-3" value= "#243447" style = {{backgroundColor: `${darkColor.one}`}} onClick = {Color}></button>
      <button type="button" className="btn py-3" value = "#141d26" style = {{backgroundColor: `${darkColor.two}`}} onClick = {Color}></button>
      <button type="button" className="btn py-3" value="#79163b" style = {{backgroundColor: `${darkColor.three}`}} onClick = {Color}></button>
    </div>
    <div className="form-check form-switch nav-link mx-4">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>

    </div>
  </div>
</nav>
    );
}



Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: "textUtils",
    about: "ABOUT ME"
}


