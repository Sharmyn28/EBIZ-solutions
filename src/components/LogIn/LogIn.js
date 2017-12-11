import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
//import { connect } from 'redux-zero/react';
//import { LogIn } from '../actions/actions';
import { Grid, Row, Col, Button } from 'react-bootstrap';

const LogInForm = () => {
    return (
        <form id='sign_in_form' onSubmit={
            e => {
                e.preventDefault();
                //signIn(this.userInputRef.value, this.passwordInputRef.value)
            }
        }>
            <div className='field'>
                <input type="text" id='user' placeholder="User" ref={e => this.userInputRef = e} required />
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