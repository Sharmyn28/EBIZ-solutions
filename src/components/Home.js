import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/css/home.css'
import {NavLink} from 'react-router-dom'

import {  Row, Col } from 'react-bootstrap';

const Home = () => {
    return(
        <div className="container">
        <Row className="cont-home" md={6}>
        <Col md={6}>
            <Button><NavLink to={'/login'}>Profesor</NavLink></Button>
            <Button>Alumno</Button>
            <Button>Administrador</Button>
        </Col>
        </Row>
        </div>
    )
}

export default Home;