import React from 'react';
import SideBar from './SideBar'
import TableInformation from "./Professor/Info";
import TableMarks from "./Professor/TableMarks";


import { Grid, Row, Col, Button, Table } from 'react-bootstrap';

const FileData = () => {
    return (
    <div>
        <SideBar/>
        <Col md={6} >
    <Table striped bordered condensed hover>
        <thead>
        <tr>
            <th>CODIGO</th>
            <th>2012221702</th>
            <th>NOMBRES <br/> Y APELLIDOS</th>
            <th>Nathaly Dayana <br/>Altamirano Gonzales</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>COD. E.P</td>
            <td>53</td>
            <td>ESCUELA <br/>PROFESIONAL</td>
            <td>INGENIERÍA DE SISTEMAS</td>
        </tr>
        <tr>
            <td>CURRÍCULA</td>
            <td>5320004</td>
        </tr>
       
        </tbody>
  </Table>
  </Col>
  </div>
    )
}

export default FileData;