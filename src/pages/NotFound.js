import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

function NotFound() {
  return (
    <Container className="vh-100 d-flex align-items-center">
      <Row className="justify-content-center align-items-center text-center">
        <Col xs={12} md={8} lg={6}>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            size="5x"
            className="text-danger mb-3"
          />
          <h1 className="mb-3">¡Error 404!</h1>
          <h2 className="mb-3" style={{ marginTop: '0.5rem' }}>Página no encontrada</h2>
          <p className="lead mb-4">
            Lo siento, la página que estás buscando no existe o ha sido eliminada. Tal vez te equivocaste al escribir la dirección o el contenido ha sido movido a otro lugar.
          </p>
          <Button variant="primary" href="/" size="lg">
            Volver al inicio
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
