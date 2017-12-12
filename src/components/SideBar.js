import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/css/sideBarMenu.css';
import { Grid, Row, Col, Button,NavItem,Nav,Accordion,Panel} from 'react-bootstrap';
import {signOut} from '../actions/actions';

const SideBar =()=>{ 
    return( 
    <Col lg={3} md={3} xs={3} smHidden xsHidden>
        <Accordion className="container-panel">
        <Panel header="Matriculas" eventKey="1">
           <NavLink to={"/simulation"}>Simulación de Matricula</NavLink>
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
        <Panel header="Salir" eventKey="7" onClick={signOut}>
        </Panel>
        </Accordion>
    </Col>
    )
}

export default SideBar;