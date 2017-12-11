import React from 'react';
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';
import SideBar from '../SideBar';
import TableMarks from "./TableMarks";
import TableInformation from "./Info";

const Professor = () => {
    return (
        <Grid fluid>
            <Row>
                <SideBar />
                <Col lg={8} md={8}>
                    <TableInformation/>
                    <TableMarks />
                </Col>
            </Row>
        </Grid>
    )
}

export default Professor;