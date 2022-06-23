import React from "react";
import {Link} from "react-router-dom";


const Navbar = () => {
    return <>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link to={'/'} className="navbar-brand">
    <img src="https://dipafrica.com/wp-content/uploads/2016/05/logo-edipafriquecmyb300dpi-1.jpg" className='imgn' />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" ariaExpanded="false" ariaLabel="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" to={"/"}>Tous les modèles</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/modele"}>Nouveau modele</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/edition"}>Espace editeur</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to={"/info"}>info</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
}

export default Navbar