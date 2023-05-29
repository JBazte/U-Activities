import React from 'react';
import { Form, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

function Login() {
    return (
        <>
            <section className="vh-100 overflow-hidden">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-4 px-0 position-relative d-none d-sm-block">
                            <Link className="navbar-brand" to="/login">
                                <img src="https://st1.u-tad.com/media/2020/06/logo_utad.png" alt="Logo" className="d-inline-block align-top position-absolute" style={{ left: "10%", top: "10%", marginTop: "-30px", marginLeft: "-5px" }} />
                            </Link>
                            <img src='https://www.marketinclusion.com/wp-content/uploads/2018/08/Fundraising-y-Deporte-ONG.jpg' alt='activity_img' className="w-100 vh-100 object-center" style={{ objectFit: "cover" }} />
                        </div>
                        <div className="col-sm-6 text-black mx-auto">
                            <div className="p-5">
                                <Card className="shadow custom-form">
                                    <Card.Body className="py-3 d-flex flex-column align-items-center">
                                        <h3 className="mb-2 text-center">¿Problemas para iniciar sesión?</h3>
                                        <p className='p-0 m-0 text-center'>Ingresa tu correo electrónico y te enviaremos un enlace para que puedas recuperar el acceso a tu cuenta.</p>
                                        <Form className='w-100 px-2'>
                                            <Form.Group controlId="formEmail">
                                                <br />
                                                <Form.Control type="email" placeholder="Correo Electrónico" />
                                            </Form.Group>
                                            <button type="submit" className="btn btn-primary mt-3 w-100">Recuperar cuenta</button>
                                        </Form>
                                    </Card.Body>
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