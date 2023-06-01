import { React, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { faUserCircle, faCircle, faBell, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import Popup from './Popup';

function Navbar() {
    const [showPopup, setShowPopup] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        const adminCookie = document.cookie.split(';').find((cookie) => cookie.trim().startsWith('admin-token='));
        if (adminCookie) {
            setIsAdmin(true);
        }
    }, []);

    const handleLogoutClick = () => {
        setShowPopup(true);
    };

    const handleAcceptPopup = () => {
        document.cookie = "admin-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "user-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        navigate("/login");
        setShowPopup(false);
    };

    const handleDeclinePopup = () => {
        setShowPopup(false);
    };

    return (
        <nav className="navbar sticky-top navbar-expand-md bg-white justify-content-center shadow-sm">
            <div className="d-flex page-margin w-100 align-middle">
                <Link className="navbar-brand me-5" to="/">
                    <img src="https://st1.u-tad.com/media/2020/06/logo_utad.png" alt="" className="d-inline-block align-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                    <ul className="nav nav-pills navbar-nav w-100 h-100 align-middle">
                        <li className="nav-item mx-3 my-auto">
                            <Link className="nav-link rounded-pill py-0 px-3 active" to="/">Eventos<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item mx-3 my-auto">
                            <Link className="nav-link rounded-pill py-0 px-3 navbar-custom-text" to="#">Buscar</Link>
                        </li>
                        <li className="nav-item mx-3 my-auto">
                            <Link className="nav-link rounded-pill py-0 px-3 navbar-custom-text" to="#">Más</Link>
                        </li>
                        {isAdmin &&
                            <li className="nav-item mx-3 my-auto">
                                <Link className="nav-link rounded-pill py-0 px-3 navbar-custom-text" to="/admin/sponsor">Agregar Sponsor</Link>
                            </li>}
                        <div className='d-md-none'>
                            <li className="nav-item">
                                <Link className="nav-link" to="/notifications">Notificaciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Guardados</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Ajustes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#" onClick={handleLogoutClick}>
                                    Cerrar sesión
                                </Link>
                            </li>
                        </div>
                        <li className="nav-item my-auto ms-auto">
                            <Link className="nav-link navbar-custom-text" to="/login"><u>Iniciar sesión</u></Link>
                        </li>
                        <li className="nav-item dropdown me-3 my-auto d-none d-md-block">
                            <Link className="nav-link dropdown-toggle pt-1" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "#0065ef" }} >
                                <FontAwesomeIcon icon={faUserCircle} size="2xl" style={{ color: "#000000" }} />
                            </Link>
                            <ul className="dropdown-menu border border-3 border-primary dropdown-custom-position" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/notifications">
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
                                    <Link className="dropdown-item" to="#" onClick={handleLogoutClick}>
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
            {showPopup && (
                <Popup content="¿Estas seguro de querer cerrar la sesión?" handleAccept={handleAcceptPopup} handleDecline={handleDeclinePopup} />
            )}
        </nav>
    );
}

export default Navbar;