import React from 'react';
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';
import SideBar from '../SideBar';
import registrationCourses from '../../store/RegistrationCourses';
import { GrandTotal, getStudentName } from "../../actions/actions";

const StudentRecord = ({ number, name, mark1, mark2 }) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{name}</td>
            <td><input placeholder='mark1' value={ mark1 }/></td>
            <td><input placeholder='mark1' value={mark2} /></td>
            <td>{GrandTotal(mark1, mark2)}</td>
        </tr>
    )
}

const TableMarks = () => {
    const classMarks = registrationCourses.map((e, index) => {
        return (
            <StudentRecord
                key={index}
                number={index + 1}
                name={getStudentName(e.idStudent)}
                mark1={e.mark1}
                mark2={e.mark2}
            />
        )
    })
    return (
        <Col lg={12} md={12}>
            <Table bordered condensed hover responsive>
                <thead>
                    <tr>
                        <th colSpan="2">Alumnos</th>
                        <th colSpan="2">Nota de Periodo</th>
                        <th>Promedio</th>
                    </tr>
                </thead>
                <tbody>
                    {classMarks}
                </tbody>
            </Table>
        </Col>
    )
}

export default TableMarks;