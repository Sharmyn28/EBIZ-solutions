import React from 'react';
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';
import SideBar from '../SideBar';

const StudentRecord = ({name, mark1, mark2}) => {
    return (
        <tr>
            <td></td>
            <td>{name}</td>
            <td>{mark1}</td>
            <td>{mark2}</td>
            <td></td>
        </tr>
    )
}

const TableMarks = () => {
    const classMarks = bio.map((item) => {
        return (
            item.colaborativos.map((e, index) => {
                return (
                    <StudentRecord
                        key={index}
                        name={e.idStudent}
                        mark1={e.mark1}
                        mark2={e.mark2}
                    />
                )
            })
        )
    })
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
                
            </tbody>
        </Table>
    )
}

export default TableMarks;