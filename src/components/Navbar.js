import React, {Component} from "react"
import logo from './logo_newsr.png'
import {Link} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
                <nav className="navbar navbar-expand-lg bg-warning fw-bold bg-body-warning">
           <div className="container-fluid">
            <Link className="navbar-brand" to="/"/><img src={logo} alt="newslogo" style={{width:'130px'}} />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav h5">
                <li className="nav-item">

                <Link className="nav-link active" to="/general">News</Link>
                </li>
                   <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link></li>
                   <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment </Link></li>
                   <li className="nav-item">
                <Link className="nav-link" to="/general">General </Link></li>
                   <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link></li>
                   <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link></li>
                   <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link></li>
                   <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link></li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <i className="bi bi-feather"/>

                {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More link
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/">World news</Link></li>
                    <li><Link className="dropdown-item" to="/">Sports</Link></li>
                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
                </li> */}
            </ul>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar



