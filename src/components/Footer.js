import { React } from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-dark text-center text-white mt-auto w-100">
            <div className="text-center p-3 " style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)" }}>
                <Link className="text-white mx-5 text-decoration-none fw-light" to="/privacidad">Política de Privacidad</Link>
                <Link className="text-white mx-5 text-decoration-none fw-light" to="/legal">Condiciones Legales</Link>
            </div>
        </footer>
    );
}

export default Footer;