import { React, useState } from 'react';
import { Form, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import Footer from '../../components/Footer';

const serverURL = process.env.REACT_APP_BACKEND_URL;

function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleCloseAlert = () => {
        setErrorMessage('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${serverURL}/auth/login/admin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    phone: phone
                })
            });

            const data = await response.json();

            const { member, token } = data;

            document.cookie = 'admin-token=' + token + '; path=/';
            navigate("/admin/sponsor");

            // Aquí puedes realizar acciones con la respuesta del servidor
            console.log(data);
        } catch (error) {
            // Aquí puedes manejar el error de la solicitud
            setErrorMessage("Correo electrónico o teléfono incorrectos");
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
                                        <h3 className="mb-4">INICIAR SESIÓN | ADMIN</h3>
                                        <Form className='w-100 px-2' onSubmit={handleLogin}>
                                            <Form.Group controlId="formUser">
                                                <Form.Label className='fw-bold text-dark h6'>Correo Electrónico</Form.Label>
                                                <Form.Control type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </Form.Group>
                                            <br />
                                            <Form.Group controlId="formPhone" className='mb-3' required value={phone} onChange={(e) => setPhone(e.target.value)}>
                                                <Form.Label className='fw-bold text-dark h6'>Teléfono</Form.Label>
                                                <Form.Control type="phone" required />
                                            </Form.Group>
                                            {errorMessage && (
                                                <Alert variant="danger" className='mt-3' onClose={handleCloseAlert} dismissible>
                                                    <span>{errorMessage}</span>
                                                </Alert>
                                            )}
                                            <button type="submit" className="btn btn-primary w-100">Acceder</button>
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