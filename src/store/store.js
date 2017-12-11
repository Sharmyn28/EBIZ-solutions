import createStore from 'redux-zero';
import students from "./Students"
import registrationCourses from "./RegistrationCourses"

const initialState = 
{
    successLogin : false,    
    teacher: 
    {
        id: null,
        firstName: null,
        lastName: null,
    },
 };
 
 const store = createStore(initialState);
 export default store;