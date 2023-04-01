import React from 'react';
import { Form, Card } from 'react-bootstrap';

function SignUp() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Card className="w-50 shadow custom-form">
                <Card.Body className="p-4 d-flex flex-column align-items-center">
                    <h3 className="mb-4">REGISTRARSE</h3>
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
                        <div class="d-flex mt-4 justify-content-center align-items-center w-100">
                            <button type="submit" class="btn btn-primary">REGISTRARSE</button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};


export default SignUp;