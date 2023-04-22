import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faUserCircle, faCircle, faBell, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-light navbar-expand-md bg-white justify-content-center shadow-sm my-2">
            <div className="d-flex justify-content-between mx-5 px-5 w-100">
                <Link className="navbar-brand" to="#">
                    <img src="https://st1.u-tad.com/media/2020/06/logo_utad.png" alt="" className="d-inline-block align-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                    <ul className="nav nav-pills navbar-nav ms-auto w-100 justify-content-end">
                        <li className="nav-item ">
                            <Link className="nav-link active" to="#">Eventos<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Buscar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Más</Link>
                        </li>
                        <div className='d-md-none'>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Notificaciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Guardados</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Ajustes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Cerrar sesión</Link>
                            </li>
                        </div>
                        <li className="nav-item dropdown me-3 d-none d-md-block">
                            <Link className="nav-link dropdown-toggle pt-1" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "#0065ef" }} >
                                <FontAwesomeIcon icon={faUserCircle} size="2xl" style={{ color: "#0065EF" }} />
                            </Link>
                            <ul className="dropdown-menu border border-3 border-primary dropdown-custom-position" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="#">
                                        <span className="fa-layers me-2">
                                            <FontAwesomeIcon icon={faCircle} transform="grow-6" style={{ color: "#000000" }} />
                                            <FontAwesomeIcon icon={faBell} inverse transform="shrink-3" />
                                        </span> Notificaciones
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">
                                        <span className="me-2">
                                            <FontAwesomeIcon icon={faHeart} transform="grow-6" style={{ color: "#000000" }} />
                                        </span> Guardados
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">
                                        <span className="me-2">
                                            <FontAwesomeIcon icon={faCog} transform="grow-6" style={{ color: "#000000" }} />
                                        </span> Ajustes
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">
                                        <span className="me-2">
                                            <FontAwesomeIcon icon={faCircleXmark} transform="grow-6" style={{ color: "#000000" }} />
                                        </span> Cerrar sesión
                                    </Link>
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