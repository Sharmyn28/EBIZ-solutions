import React from 'react';
import '../styles/css/home.css';
import {NavLink} from 'react-router-dom';
import { Button , Row, Col } from 'react-bootstrap';
import { saveRol } from '../actions/actions'
const Home = () => {
    return(
        <div className="container container-home">
        <Row className="home-elecion" align="center">
        <Col md={10} xs={10}>
        <img width="20%" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Logosimbolo_Universidad_de_La_Salle.png"/>
        </Col>
        <Col md={12} xs={12}>
            <Button><NavLink to={'/login'} id='teacher' onClick={e => saveRol(e.target.id)}>Profesor</NavLink></Button>
            <Button><NavLink to={'/home'}>Alumno</NavLink></Button>
            <Button><NavLink to={'/login'} id='admin'  onClick={e => saveRol(e.target.id)}>Admin</NavLink></Button>
        </Col>
        </Row>
        </div>
    )
}

export default Home;