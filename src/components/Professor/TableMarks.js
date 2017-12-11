import React from 'react';
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';
import SideBar from '../SideBar';

const StudentRecord = ({name, mark1, mark2}) => {
    return (
        <tr>
            <td>1</td>
            <td>name</td>
            <td>mark1</td>
            <td>mark2</td>
        </tr>
    )
}

const TableMarks = () => {
    return (
        <Table bordered condensed hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Alumnos</th>
                    <th>Nota de Periodo</th>
                    <th>Promedio</th>
                </tr>
            </thead>
            <tbody>
                <StudentRecord />
                <StudentRecord />
                <StudentRecord />
            </tbody>
        </Table>
    )
}

export default TableMarks;