import React from 'react';
import { Grid, Row, Col, Button, Table } from 'react-bootstrap';
import SideBar from '../SideBar';
import TableMarks from "./TableMarks";
import TableInformation from "./Info";
import { connect } from 'redux-zero/react';
import { NavLink, Redirect } from 'react-router-dom';

const Professor = ({ user, successLogin }) => {
console.log ( "successLogin", successLogin)
return (
<Grid fluid>
{
!successLogin && <Redirect to="/home" />
} 
{
successLogin && 
<Row>
<SideBar />
<Col lg={8} md={8}></Col>
<Col lg={8} md={8}>
<TableInformation user={user}/>
<TableMarks user={user} />
<Col lgOffset={5} lg={2} md={2}><Button>Guardar Notas</Button></Col> 
</Col>
</Row>
} 


}
</Grid>
)
}

//export default Professor;
const mapToProps = ({ user, successLogin }) => ({ user, successLogin })
export default connect(mapToProps)(Professor);