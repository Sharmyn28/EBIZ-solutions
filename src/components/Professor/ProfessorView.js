import React from 'react';
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';
import SideBar from '../SideBar';
import TableMarks from "./TableMarks";
import TableInformation from "./Info";
import { connect } from 'redux-zero/react';

const Professor = ({ user, teacherClass, successLogin }) => {
    return (
        <Grid fluid>
            <Row>
                <SideBar />
                <Col lg={8} md={8}></Col>
                <Col lg={8} md={8}>
                    <TableInformation user={user} teacherClass={teacherClass}/>
                    <TableMarks teacherClass={teacherClass} successLogin={successLogin}/>
                    <Col lgOffset={5} lg={2} md={2}><Button>Guardar Notas</Button></Col> 
                </Col>
            </Row>
        </Grid>
    )
}

//export default Professor;
const mapToProps = ({ user, teacherClass, successLogin }) => ({ user, teacherClass, successLogin })
export default connect(mapToProps)(Professor);