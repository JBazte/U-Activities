import React from 'react';
import { Form, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';

function Signup() {
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
                                        <h3 className="mb-4">REGISTRO</h3>
                                        <Form className='w-100 px-2'>
                                            <Form.Group controlId="formEmail">
                                                <Form.Label className='fw-bold text-dark h6'>Correo Electrónico</Form.Label>
                                                <Form.Control type="email" />
                                            </Form.Group>
                                            <br />
                                            <Form.Group controlId="formPassword">
                                                <Form.Label className='fw-bold text-dark h6'>Contraseña</Form.Label>
                                                <Form.Control type="password" />
                                            </Form.Group>
                                            <Link to="#" className='text-decoration-none text-body form-text text-muted'>La contraseña debe tener mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 caracter especial.</Link>
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
                                                    <u style={{ color: "black", textDecoration: "underline black" }}>¿Ya tienes una cuenta?</u><u style={{ color: "#0065EF", textDecoration: "underline #0065EF" }}> Inicia sesión</u>
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


export default Signup;