import React from 'react';
import { Grid, Row, Col, Button, Table, ListGroup, ListGroupItem,NavItem,Nav,Accordion,Panel} from 'react-bootstrap';
import SideBar from './SideBar';
import TableMarks from "./Professor/TableMarks";
import TableInformation from "./Professor/Info";
import { connect } from 'redux-zero/react';
import { filterCourses } from '../actions/actions';
import { NavLink, Redirect } from 'react-router-dom';
import { getTeacherStudents } from "../actions/actions";

const SideAdmin=()=>{
    return(
        <Col className="cont-sidebar" lg={3} md={3} xs={3} smHidden xsHidden>
        <img  width="70%" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Logosimbolo_Universidad_de_La_Salle.png"/>
        <Accordion className="container-panel">
        <Panel className="cont-panel" header="Matriculas" eventKey="1">
           <NavLink to={"/simulation"} >Simulación de Matrícula</NavLink>
        </Panel>
        </Accordion>
        </Col>
    )        
}
const CourseAdmin = ({ successLogin }) => { 
   
    
    let courses = filterCourses();
    // const listCourses = courses.map((course, index) => {
    //     return (
    //         <ListGroupItem key={index}>{course.nameCourse}</ListGroupItem>
    //     )
    // });
    return (
        <Grid fluid>
            {
                !successLogin && <Redirect to="/login" />
            }
            <Row>
                <SideAdmin/>
                <Col lg={8} md={8}>
                    <h3>Bienvenido!</h3>
                    <p>Asigne un curso a un Profesor: </p>
                    <Col lgOffset={4} mdOffset={4} lg={4} md={4}>
                        <ListGroup>
                            {/* {listCourses} */}
                        </ListGroup>
                    </Col>
                </Col>
            </Row>
        </Grid>
    )
}

const mapToProps = ({ successLogin }) => ({ successLogin })
export default connect(mapToProps)(CourseAdmin);