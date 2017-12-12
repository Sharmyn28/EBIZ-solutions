import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            Home

            <Button><NavLink to={'/login'} id='teacher'> Profesor</NavLink></Button>
            <Button>/<NavLink to={'/login'} id='admin'> Admin</NavLink></Button>
            <Button>Alumno</Button>
        </div>
    )
}

export default Home;