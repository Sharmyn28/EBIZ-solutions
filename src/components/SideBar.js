import React from 'react';
import styles from '../styles/css/sideBarMenu.css';
import { Grid, Row, Col, Button,NavItem,Nav,Accordion,Panel} from 'react-bootstrap';
const SideBar =()=>{ 
    return( 
    <Col lg={3} md={3} smHidden xsHidden>
        <Accordion className="container-panel">
        <Panel className="cont-panel" header="Matriculas" eventKey="1">
            <p >Notas</p>
        </Panel>
        <Panel header="Consultas" eventKey="2">
        </Panel>
        <Panel header="Salir" eventKey="3">
        </Panel>
        </Accordion>
    </Col>
    )
}

export default SideBar;