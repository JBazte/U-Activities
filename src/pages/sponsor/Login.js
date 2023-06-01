import React from 'react';
import { useState } from 'react';
import { Form, Card } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import Footer from '../../components/Footer';

const serverURL = process.env.REACT_APP_BACKEND_URL;

function Login() {
    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${serverURL}/auth/login/sponsor`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            const {token} = data;
            // Almacenar el token en el encabezado de las solicitudes
            /** 
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };
            */
            document.cookie = 'sponsor-token=' + token + '; path=/';
            navigate("/sponsor/activity");

            // Aquí puedes realizar acciones con la respuesta del servidor
            console.log(data);
        } catch (error) {
            // Aquí puedes manejar el error de la solicitud
            //TODO: mensaje gestion errores login
            console.error(error);
        }
    };
    
    return (
        <>
            <section className="vh-100 overflow-hidden">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-4 px-0 position-relative d-none d-sm-block">
                            <Link className="navbar-brand" to="#">
                                <img src="https://st1.u-tad.com/media/2020/06/logo_utad.png" alt="Logo" className="d-inline-block align-top position-absolute" style={{ left: "10%", top: "10%", marginTop: "-30px", marginLeft: "-5px" }} />
                            </Link>
                            <img src='https://www.marketinclusion.com/wp-content/uploads/2018/08/Fundraising-y-Deporte-ONG.jpg' alt='activity_img' className="w-100 vh-100 object-center" style={{ objectFit: "cover" }} />
                        </div>
                        <div className="col-sm-6 text-black mx-auto">
                            <div className="p-5">
                                <Card className="shadow custom-form">
                                    <Card.Body className="py-3 d-flex flex-column align-items-center">
                                        <h3 className="mb-4">INICIAR SESIÓN SPONSOR</h3>
                                        <Form className='w-100 px-2' onSubmit={handleLogin}>
                                            <Form.Group controlId="formEmail">
                                                <Form.Label className='fw-bold text-dark h6'>Correo Electrónico</Form.Label>
                                                <Form.Control type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                                            </Form.Group>
                                            <br />
                                            <Form.Group controlId="formPassword">
                                                <Form.Label className='fw-bold text-dark h6'>Contraseña</Form.Label>
                                                <Form.Control type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                                            </Form.Group>
                                            <Link to="/forgot" className='text-decoration-none text-body'><u>¿Has olvidado tu contraseña?</u></Link>
                                            {/* <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox">
                                                    <Form.Check.Input />
                                                    <span> Remember me</span>
                                                    </Form.Check>
                                                </Form.Group> */}
                                            <br />
                                            <button type="submit" className="btn btn-primary mt-3 w-100">Acceder</button>
                                            <div className="mt-4 w-100 text-center">
                                                <Link to="/signup">
                                                    <u style={{ color: "black", textDecoration: "underline black" }}>¿No tienes una cuenta?</u><u style={{ color: "#0065EF", textDecoration: "underline #0065EF" }}> Regístrate</u>
                                                </Link>
                                            </div>
                                        </Form>
                                    </Card.Body >
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sticky-bottom'>
                    <Footer />
                </div>
            </section >
        </>
    );
};


export default Login;