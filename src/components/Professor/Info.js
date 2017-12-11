import React from 'react';
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';
import SideBar from '../SideBar';

/*const TeacherRecord = ({ number, name, mark1, mark2 }) => {
    return (
        <tr>
            <th>{number}</th>
            <td>{name}</td>
        </tr>
    )
}*/

const TableInformation = () => {
    return (
        <Col lgOffset={8} mdOffset={8} lg={4} md={4}>
            <Table bordered condensed responsive>
                {/*<thead>
                <tr>
                    <th colSpan="2">Alumnos</th>
                    <th colSpan="2">Nota de Periodo</th>
                    <th>Promedio</th>
                </tr>
            </thead>*/}
                <tbody>
                    <tr>
                        <th>Profesor</th>
                        <td>Rodriguez Rodriguez, Luz</td>
                    </tr>
                    <tr>
                        <th>Curso</th>
                        <td>ghchgdhg</td>
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
        </Col>
    )
}

export default TableInformation;