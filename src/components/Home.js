import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { saveRol } from '../actions/actions';

const Home = () => {
    return(
        <div>
            Home

            <Button><NavLink to={'/login'} id='teacher' onClick={e => saveRol(e.target.id)}> Profesor</NavLink></Button>
            <Button><NavLink to={'/login'} id='admin'  onClick={e => saveRol(e.target.id)}> Admin</NavLink></Button>
            <Button>Alumno</Button>
        </div>
    )
}

export default Home;