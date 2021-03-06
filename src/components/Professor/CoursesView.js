import React from 'react';
import { Grid, Row, Col, Button, Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import SideBar from '../SideBar';
import TableMarks from "./TableMarks";
import TableInformation from "./Info";
import { connect } from 'redux-zero/react';
import { filterCourses } from '../../actions/actions';
import { NavLink, Redirect } from 'react-router-dom';
import { getTeacherStudents, saveCourses } from "../../actions/actions";

const Courses = ({ successLogin }) => {
    let courses = filterCourses();
    const listCourses = courses.map((course, index) => {
        return (
            <ListGroupItem key={index}><NavLink to={"/professor"} onClick={() => {
                getTeacherStudents(course.idCourse);
                // saveCourses(courses);
            }}>
                {course.nameCourse}</NavLink>
            </ListGroupItem>
        )
    });
    //console.log("courses", courses)
    //console.log("listCourses", listCourses)
    return (
        <Grid fluid>
            {
                !successLogin && <Redirect to="/home" />
            }
            <Row>
                <SideBar />
                <Col lg={8} md={8}>
                    <h3>Bienvenido!</h3>
                    <p>Sus cursos a dictar son: </p>
                    <Col lgOffset={4} mdOffset={4} lg={4} md={4}>
                        <ListGroup>
                            {listCourses}
                        </ListGroup>
                    </Col>
                </Col>
            </Row>
        </Grid>
    )
}

const mapToProps = ({ successLogin }) => ({ successLogin })
export default connect(mapToProps)(Courses);