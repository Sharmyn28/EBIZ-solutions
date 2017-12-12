import React from 'react';
import SideBar from './SideBar'
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';

const Simulation = () => {
    return (
        <div>
            <SideBar />
            <Row md={6}>
                <Col md={6}>
                    <img width="50%" src="https://www.ucsm.edu.pe/pucsm/wp-content/uploads/2016/06/escudo_retina.png" />
                </Col>
                <Col md={6}>
                    <Button>Simular</Button>
                </Col>
            </Row>
        </div>
    )
}
export default Simulation;