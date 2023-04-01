import React from 'react';
import { Form, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Card className="w-50 shadow custom-form">
                <Card.Body className="p-4 d-flex flex-column align-items-center">
                    <h3 className="mb-4">LOG IN</h3>
                    <Form className="w-100">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>CORREO</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>CONTRASEÑA</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Link to="#" className='text-decoration-none text-body'>¿Has olvidado tu contraseña?</Link>
                        {/* <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox">
                                <Form.Check.Input />
                                <span> Remember me</span>
                            </Form.Check>
                        </Form.Group> */}
                        <div class="d-flex mt-4 justify-content-between align-items-center w-100">
                            <Link to="/signup">¿No tienes una cuenta? Regístrate</Link>
                            <button type="submit" class="btn btn-primary">Acceder</button>
                        </div>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};


export default Login;