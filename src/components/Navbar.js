import React from 'react'
import { Link } from 'react-router-dom';

const Navbar=(props)=> { 
    const Capitalize=(word)=>{
        return word.charAt(0).toUpperCase()+word.slice(1);
    };

    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-dark`} style={{background:"#0f0f0f"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Samachar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
              <li className="nav-item active"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item active"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item active"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item active"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item active"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item active"><Link className="nav-link" to="/technology">Technology</Link></li>
            </ul>
                <div className="form-check form-switch mx-2 my-1" style={{color:"white"}}>
                    <i className={`fas fa-moon`} onClick={props.toogle} id="flexSwitchCheckDefault" style={props.mode==="dark" ? { color: "red", cursor: "pointer",fontSize: "2rem" } : { color: "white", cursor: "pointer",fontSize: "1.5rem" }}></i>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{Capitalize(props.mode)} Mode</label>
                </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
