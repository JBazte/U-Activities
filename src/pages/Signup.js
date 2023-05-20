import React from 'react';
import { Form, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import { useState } from 'react';

function Signup() {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        gender: '',
        dni: '',
        birth_date: '',
        degree: ''
    });

    const handleUserInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const [additionalData, setAdditionalData] = useState({
        category: [],
        modality: [],
        availability: '',
        // commitment_estimate: []
    });

    const handleAdditionalInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            const updatedData = {
                ...additionalData,
                [name]: checked
                    ? [...additionalData[name], value]
                    : additionalData[name].filter((item) => item !== value)
            };
            setAdditionalData(updatedData);
        } else {
            setAdditionalData({
                ...additionalData,
                [name]: value
            });
        }
    };

    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (userData.password !== confirmPassword) {
            setPasswordError('Las contraseñas no son iguales');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
        if (!passwordRegex.test(userData.password)) {
            setPasswordError("La contraseña debe tener como mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 caracter especial");
            return;
        }

        setPasswordError('');

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: userData,
                    additionalData: additionalData
                })
            });
            await response.json();
        } catch (err) {
            console.error('Registration failed:', err);
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
                                        <h3 className="mb-4">REGISTRO</h3>
                                        <Form className='w-100 px-2 vh-100 overflow-auto' style={{ "maxHeight": '410px' }} onSubmit={handleSubmit}>
                                            <Form.Group controlId="formFirstName">
                                                <Form.Label className='fw-bold text-dark h6'>Nombre</Form.Label>
                                                <Form.Control type="text" name="first_name" onChange={handleUserInputChange} required />
                                            </Form.Group>
                                            <Form.Group controlId="formLastName">
                                                <br />
                                                <Form.Label className='fw-bold text-dark h6'>Apellido</Form.Label>
                                                <Form.Control type="text" name="last_name" onChange={handleUserInputChange} required />
                                            </Form.Group>
                                            <Form.Group controlId="formEmail">
                                                <br />
                                                <Form.Label className='fw-bold text-dark h6'>Correo Electrónico</Form.Label>
                                                <Form.Control type="email" name="email" onChange={handleUserInputChange} required />
                                            </Form.Group>
                                            <Form.Group controlId="formPassword">
                                                <br />
                                                <Form.Label className='fw-bold text-dark h6'>Crea una contraseña</Form.Label>
                                                <Form.Control type="password" name="password" onChange={handleUserInputChange} required />
                                            </Form.Group>
                                            <Form.Group controlId="formConfirmPassword">
                                                <br />
                                                <Form.Label className='fw-bold text-dark h6'>Confirmar contraseña</Form.Label>
                                                <Form.Control type="password" name="confirm_password" onChange={handleConfirmPasswordChange} required />
                                            </Form.Group>
                                            {passwordError && <span className="text-danger">{passwordError}</span>}
                                            <Form.Group controlId="formGender">
                                                <br />
                                                <Form.Label className='fw-bold text-dark h6'>Género</Form.Label>
                                                <Form.Control as="select" name="gender" onChange={handleUserInputChange} required>
                                                    <option>Selecciona tu género</option>
                                                    <option value="male">Masculino</option>
                                                    <option value="female">Femenino</option>
                                                    <option value="other">Otro</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="formDni">
                                                <br />
                                                <Form.Label className='fw-bold text-dark h6'>DNI</Form.Label>
                                                <Form.Control type="text" name="dni" onChange={handleUserInputChange} required />
                                            </Form.Group>
                                            <Form.Group controlId="formBirthDate">
                                                <br />
                                                <Form.Label className='fw-bold text-dark h6'>Fecha de Nacimiento</Form.Label>
                                                <Form.Control type="date" name="birth_date" onChange={handleUserInputChange} required />
                                            </Form.Group>
                                            <Form.Group controlId="formDegree">
                                                <br />
                                                <Form.Label className='fw-bold text-dark h6'>Titulación</Form.Label>
                                                <Form.Control as="select" name="degree" onChange={handleUserInputChange} required >
                                                    <option>Selecciona tu grado académico</option>
                                                    <option value="INSO">Grado en Ingeniería del Software</option>
                                                    <option value="INSG">Grado en Ingeniería del Software (Inglés)</option>
                                                    <option value="DIPI">Grado en Diseño de Productos Interactivos</option>
                                                    <option value="DIPG">Grado en Diseño de Productos Interactivos (Inglés)</option>
                                                    <option value="DIDI">Grado en Diseño Digital</option>
                                                    <option value="MAIS">Doble Grado en Ingeniería del Software y Matemática Computacional</option>
                                                    <option value="ANIV">Grado en Animación</option>
                                                    <option value="ANIG">Grado en Animación (Inglés)</option>
                                                    <option value="FIIS">Doble Grado En Ingenieríar del Software y Física Computacional</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="formCategory">
                                                <br />
                                                <Form.Label className="fw-bold text-dark h6">Categoría</Form.Label>
                                                <div className="d-flex">
                                                    <Form.Check
                                                        className='text-dark pe-3'
                                                        type="checkbox"
                                                        name="category"
                                                        value="sociales"
                                                        label={<span className='text-dark'>Sociales</span>}
                                                        onChange={handleAdditionalInputChange}
                                                    />
                                                    <Form.Check
                                                        type="checkbox"
                                                        name="category"
                                                        value="medioambientes"
                                                        label={<span className='text-dark'>Medioambientes</span>}
                                                        onChange={handleAdditionalInputChange}
                                                    />
                                                </div>
                                            </Form.Group>
                                            <Form.Group controlId="formModality">
                                                <br />
                                                <Form.Label className="fw-bold text-dark h6">Modalidad</Form.Label>
                                                <div className="d-flex">
                                                    <Form.Check
                                                        className='text-dark pe-3'
                                                        type="checkbox"
                                                        name="modality"
                                                        value="presencial"
                                                        label={<span className='text-dark'>Presencial</span>}
                                                        onChange={handleAdditionalInputChange}
                                                    />
                                                    <Form.Check
                                                        type="checkbox"
                                                        name="modality"
                                                        value="telemático"
                                                        label={<span className='text-dark'>Telemático</span>}
                                                        onChange={handleAdditionalInputChange}
                                                    />
                                                </div>
                                            </Form.Group>
                                            <Form.Group controlId="formAvailability">
                                                <br />
                                                <Form.Label className='fw-bold text-dark h6'>Disponibilidad de tiempo</Form.Label>
                                                <Form.Control as="select" name="availability" onChange={handleAdditionalInputChange} required >
                                                    <option>Selecciona tu disponibilidad</option>
                                                    <option value="semanal">Semanal</option>
                                                    <option value="mensual">Mensual</option>
                                                    <option value="anual">Anual</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <br />
                                            <button type="submit" className="btn btn-primary mt-1 w-100">Registrarse</button>
                                        </Form>
                                        <div className="mt-4 w-100 text-center">
                                            <Link to="/login">
                                                <u style={{ color: "black", textDecoration: "underline black" }}>¿Ya tienes una cuenta?</u><u style={{ color: "#0065EF", textDecoration: "underline #0065EF" }}> Inicia sesión</u>
                                            </Link>
                                        </div>
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