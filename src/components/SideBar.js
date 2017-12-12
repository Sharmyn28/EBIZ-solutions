import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/css/sideBarMenu.css';
import { Grid, Row, Col, Button,NavItem,Nav,Accordion,Panel} from 'react-bootstrap';
const SideBar =()=>{ 
    return( 
    <Col lg={3} md={3} xs={3} smHidden xsHidden>
        <Accordion className="container-panel">
        <Panel header="Matriculas" eventKey="1">
           <NavLink to={"/simulation"}> Simulación de Matricula</NavLink>
        </Panel>
        <Panel header="Inf.Académica" eventKey="2">          
            <NavLink to={"/professor"}><p>Consolidado de Notas</p></NavLink>
            <NavLink to={"/fileData"}>Ficha Académica</NavLink>      
        </Panel>
        <Panel header="Consultas" eventKey="3">
        <NavLink to={"/samePage"}><p>Plan de Estudio</p></NavLink>
        </Panel>
        <Panel header="Información Personal" eventKey="4">        
        </Panel>
        <Panel header="Sanciones" eventKey="4">
        <NavLink to={"/sanciones"}>Detalles</NavLink>
        </Panel>
        <Panel header="Preguntas Frecuentes" eventKey="4">        
        </Panel>
        <Panel header="Salir" eventKey="5">
        </Panel>
        </Accordion>
    </Col>
    )
}

export default SideBar;