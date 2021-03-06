import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import  '../../styles/css/login.css';
import { connect } from 'redux-zero/react';
import { signIn, readUsers } from '../../actions/actions';
import { Grid, Row, Col, Button } from 'react-bootstrap';

const LogInForm = ({ successLogin, currentRol }) => {
    readUsers();
    console.log("currentRol",currentRol)    
    return (
      <div>
            {
                successLogin && ((currentRol=="teacher") ? <Redirect to = "/courses"/> : <Redirect to = "/courseAdmin" />)
            }
          <form align="center" id='sign_in_form' onSubmit={
              e => {
                  e.preventDefault();
                  signIn(this.userInputRef.value, this.passwordInputRef.value)
              }
          }>
              <div >
                  <img width="20%" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Logosimbolo_Universidad_de_La_Salle.png"/>
              </div>
              <div className='field'>
                 <input type="text" id='user' placeholder="User" ref={e => this.userInputRef = e} required/>
              </div>
              <div className='field'>
                  <input type="password" id='user_password' placeholder="Password" ref={e => this.passwordInputRef = e} required />
              </div>
              <Button type='submit'>Sign in</Button>
          </form>       
        </div>
    )
}

const LogIn = ({ successLogin, currentRol }) => {
    return (
        <div>
            <div className=''>
                <main id='main-container' role='main'>
                    <div className='view-container sessions new'>
                        <main>
                            <header >
                                <div className='logo'></div>
                            </header>
                            <LogInForm successLogin={ successLogin } currentRol={currentRol}/>
                        </main>
                    </div>
                </main>
            </div>
        </div>
    )
}

const mapToProps = ({ successLogin, currentRol }) => ({ successLogin, currentRol })
export default connect(mapToProps)(LogIn);