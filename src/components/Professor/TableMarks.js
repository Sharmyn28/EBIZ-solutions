import React from 'react';
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';
import SideBar from '../SideBar';
import registrationCourses from '../../store/RegistrationCourses';
import { GrandTotal, getStudentName, changeMarks } from "../../actions/actions";
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'redux-zero/react';
//import store from "../../store/store";

const StudentRecord = ({ number, name, mark1, mark2, selectedItem }) => {
    let total = (parseInt(mark1) + parseInt(mark2))/2;
    console.log(mark1 + ' ' + mark2);

    return (
        <tr>
            <td>{number}</td>
            <td>{name}</td>
            <td><input type='number' placeholder='mark1' defaultValue={mark1} onChange={e => changeMarks(e.target.value, 1, selectedItem)}/></td>
            <td><input type='number' placeholder='mark2' defaultValue={mark2} onChange={e => changeMarks(e.target.value, 2, selectedItem)}/></td>
            <td>{total}</td>
        </tr>
    )
}

const TableMarks = ({ registration, successLogin }) => {
    const classMarks = registration.map((e, index) => {
        return (
            <StudentRecord
                key={index}
                number={index + 1}
                name={getStudentName(e.idStudent)}
                mark1={e.mark1}
                mark2={e.mark2}
                selectedItem={index}
            />
        )
    })
    return (
        <div>
            {
                !successLogin && <Redirect to="/login" />
            }
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
        </div>
    )
}

const mapToProps = ({ successLogin }) => ({ successLogin })
export default connect(mapToProps)(TableMarks);