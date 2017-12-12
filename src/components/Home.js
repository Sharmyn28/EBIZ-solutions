import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            Home

            <Button><NavLink to={'/login'}> Profesor</NavLink></Button>
            <Button>Alumno</Button>
            <Button>/<NavLink to={'/login'}>Admin</NavLink></Button>
        </div>
    )
}

export default Home;