import React from 'react';
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';
import SideBar from '../SideBar';

const StudentRecord = () => {
    return (
        <tr>
            <td>1</td>
            <td>Name</td>
            <td><input type='number' placeholder='FirstMark'></input></td>
            <td><input type='number' placeholder='SecondMark'></input></td>
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