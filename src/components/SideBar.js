import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/css/sideBarMenu.css';
import { Grid, Row, Col, Button,NavItem,Nav,Accordion,Panel} from 'react-bootstrap';
const SideBar =()=>{ 
    return( 
    <Col className="cont-sidebar" lg={3} md={3} xs={3} smHidden xsHidden>
        <img  width="70%" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Logosimbolo_Universidad_de_La_Salle.png"/>
        <Accordion className="container-panel">
        <Panel className="cont-panel" header="Matriculas" eventKey="1">
           <NavLink to={"/simulation"} >Simulación de Matrícula</NavLink>
        </Panel>
        <Panel header="Inf.Académica" eventKey="2">          
            <NavLink to={"/professor"}><p>Consolidado de Notas</p></NavLink>
            <NavLink to={"/fileData"}>Ficha Académica</NavLink>      
        </Panel>        
        <Panel header="Sanciones" eventKey="3">
        <NavLink to={"/sanciones"}>Detalles</NavLink>
        </Panel>
        <Panel header="Preguntas Frecuentes" eventKey="4">        
        </Panel>
        <Panel header="Consultas" eventKey="5">
        </Panel>
        <Panel header="Información Personal" eventKey="6">        
        </Panel>
        <Panel header="Salir" eventKey="7">
        </Panel>
        </Accordion>
    </Col>
    )
}

export default SideBar;