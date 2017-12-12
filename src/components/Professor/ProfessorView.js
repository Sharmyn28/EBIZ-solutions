import React from 'react';
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';
import SideBar from '../SideBar';
import TableMarks from "./TableMarks";
import TableInformation from "./Info";
import { connect } from 'redux-zero/react';

const Professor = ({ registration }) => {
    return (
        <Grid fluid>
            <Row>
                <SideBar />
                <Col lg={8} md={8}>
                    <TableInformation/>
                    <TableMarks registration={registration}/>
                    <Col lgOffset={5} lg={2} md={2}><Button>Guardar Notas</Button></Col> 
                </Col>
            </Row>
        </Grid>
    )
}

//export default Professor;
const mapToProps = ({ registration }) => ({ registration })
export default connect(mapToProps)(Professor);