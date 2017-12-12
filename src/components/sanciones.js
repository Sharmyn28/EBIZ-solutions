import React from 'react';
import SideBar from './SideBar';
import '../styles/css/sanciones.css';
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';
const Sanciones = () => {
    return(
        <div>
            <SideBar/>
            <Row className="container-sanciones">
                <Col className="sanciones-text" md={6}>
                <img  width="30%" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Logosimbolo_Universidad_de_La_Salle.png"/>
                 <strong><p align="center">SANCIONES REGISTRADAS</p></strong>
                 <p><strong>NOMBRES Y APELLIDOS: </strong> ALTAMIRANO GONZALES, NATHALY DAYANA</p>             
                 <strong><p align="center">Este Alumno no tiene Sanciones Registradas</p></strong>
                </Col>
            </Row>
        </div>
    )    
}    
export default Sanciones;