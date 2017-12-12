import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import  '../../styles/css/login.css';
//import { connect } from 'redux-zero/react';
//import { LogIn } from '../actions/actions';
import { Grid, Row, Col, Button } from 'react-bootstrap';

const LogInForm = () => {
    return (
        <form align="center" id='sign_in_form' onSubmit={
            e => {
                e.preventDefault();
                //signIn(this.userInputRef.value, this.passwordInputRef.value)
            }
        }>
            <div >
                <img width="20%" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Logosimbolo_Universidad_de_La_Salle.png"/>
            </div>
            <div className='field'>
               <input type="text" id='user' placeholder="User"/>
            </div>
            <div className='field'>
                <input type="password" id='user_password' placeholder="Password" ref={e => this.passwordInputRef = e} required />
            </div>
            <Button type='submit'>Sign in</Button>
        </form>
    )
}

const LogIn = ({ successLogin }) => {
    return (
        <div>
            {
                successLogin && <Redirect to="/professor" />
            }
            <div className=''>
                <main id='main-container' role='main'>
                    <div className='view-container sessions new'>
                        <main>
                            <header >
                                <div className='logo'></div>
                            </header>
                            <LogInForm />
                        </main>
                    </div>
                </main>
            </div>
        </div>
    )
}


export default LogIn;
//const mapToProps = ({ successLogin }) => ({ successLogin })
//export default connect(mapToProps)(SignIn);