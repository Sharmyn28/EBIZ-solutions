import React from 'react';
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';
import SideBar from '../SideBar';

const TeacherRecord = ({ name, course }) => {
    return (
        <Table bordered condensed responsive>
            <tbody>
                <tr>
                    <th>Profesor</th>
                    <td>{name}</td>
                </tr>
                <tr>
                    <th>Curso</th>
                    <td>{course}</td>
                </tr>
                <tr>
                    <th>Nivel</th>
                    <td>Secundaria, Cuarto c</td>
                </tr>
                <tr>
                    <th>Periodo</th>
                    <td>2015, 3 Bimestre</td>
                </tr>
            </tbody>
        </Table>
    )
}

const TableInformation = ({ user, teacherClass }) => {
    console.log(teacherClass)
    const id = teacherClass[0].idCourse;
    return (
        <Col lgOffset={8} mdOffset={8} lg={4} md={4}>
            <TeacherRecord
                name={user.lastName + ' ' + user.firstName}
                course={id}
            />
        </Col>
    )
}

export default TableInformation;