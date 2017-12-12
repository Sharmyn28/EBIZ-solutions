import React from 'react';
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';
import SideBar from '../SideBar';
import TableMarks from "./TableMarks";
import TableInformation from "./Info";
import { connect } from 'redux-zero/react';
import {filterCourses} from '../../actions/actions';
import { NavLink, Redirect } from 'react-router-dom';

const Courses = ({successLogin}) => {
    let courses = filterCourses();
    const listCourses = courses.map((course) => <li>{course.nameCourse}</li>);
    console.log("courses", courses)
    console.log("listCourses", listCourses)    
    return (
        <Grid fluid>
            {
                !successLogin  && <Redirect to = "/login" />
            }
            <Row>
                <SideBar />
                <Col lg={8} md={8}>
                    <ul>
                        {listCourses}
                    </ul>
                </Col>
            </Row>
        </Grid>
    )
}

const mapToProps = ({ successLogin }) => ({successLogin})
export default connect(mapToProps)(Courses);