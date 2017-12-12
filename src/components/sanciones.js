import React from 'react';
import SideBar from './SideBar'
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';


const Sanciones = () => {
    return(
        <div>
            <SideBar/>
            <Row md={6} >
                <Col md={6}>
                    <p>Sanciones</p>
                </Col>
                <Col md={6}>
                <img width="50%" src="https://www.ucsm.edu.pe/pucsm/wp-content/uploads/2016/06/escudo_retina.png"/>
                </Col>
                <Col md={6}>
                 <p>SANCIONES REGISTRADAS</p>
                 <p>NOMBRES Y APELLIDOS: ALTAMIRANO GONZALES NATHALY DAYANA</p>
                 <p>Este Alumno no tiene Sanciones Registradas</p>
                </Col>

            </Row>
        </div>
    )    
}    
export default Sanciones;