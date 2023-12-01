import React, {Component} from "react"

export class Navbar extends Component {
  render() {
    return (
      <div>
                <nav className="navbar navbar-expand-lg bg-warning fw-bold bg-body-warning">
           <div className="container-fluid">
         <i className="bi bi-paint-bucket"></i> 
            <a className="navbar-brand" href="/"> Daily-Pulse</a><i className="bi bi-feather"/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">News</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More link
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">World news</a></li>
                    <li><a className="dropdown-item" href="/">Sports</a></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}

export default Navbar



