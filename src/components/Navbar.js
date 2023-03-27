import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faUserCircle, faCircle, faBell, faCog } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-light navbar-expand-md bg-white justify-content-center shadow-sm mb-2">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://st1.u-tad.com/media/2020/06/logo_utad.png" alt="" className="d-inline-block align-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                    <ul className="nav nav-pills navbar-nav ms-auto w-100 justify-content-end">
                        <li className="nav-item ">
                            <a className="nav-link active" href="#">Eventos<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Buscar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Más</a>
                        </li>
                        <li className="nav-item dropdown me-5">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "#0065ef" }} >
                                <FontAwesomeIcon icon={faUserCircle} size="xl" style={{ color: "#0065EF" }} />
                            </a>
                            <ul className="dropdown-menu border border-3 border-primary" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <span className="fa-layers me-2">
                                            <FontAwesomeIcon icon={faCircle} transform="grow-6" style={{ color: "#000000" }} />
                                            <FontAwesomeIcon icon={faBell} inverse transform="shrink-3" />
                                        </span> Notificaciones
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <span className="me-2">
                                            <FontAwesomeIcon icon={faHeart} transform="grow-6" style={{ color: "#000000" }} />
                                        </span> Guardados
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <span className="me-2">
                                            <FontAwesomeIcon icon={faCog} transform="grow-6" style={{ color: "#000000" }} />
                                        </span> Ajustes
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <span className="me-2">
                                            <FontAwesomeIcon icon={faCircleXmark} transform="grow-6" style={{ color: "#000000" }} />
                                        </span> Cerrar sesión
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;