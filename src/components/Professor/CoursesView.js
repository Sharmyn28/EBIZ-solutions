import React from 'react';
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';
import SideBar from '../SideBar';
import TableMarks from "./TableMarks";
import TableInformation from "./Info";
import { connect } from 'redux-zero/react';

const CoursesView = ({ registration }) => {
    const listCourses = 0;
    return (
        <Grid fluid>
            <Row>
                <SideBar />
                <Col lg={8} md={8}>
                    <ul>
                        <li></li>
                    </ul>
                </Col>
            </Row>
        </Grid>
    )
}

//export default Professor;
const mapToProps = ({ registration }) => ({ registration })
export default connect(mapToProps)(Professor);