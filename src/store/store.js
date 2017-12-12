import createStore from 'redux-zero';
import students from "./Students";
import registrationCourses from "./RegistrationCourses";
import teacher from "./Teachers";
import courses from "./Courses";
import { GrandTotal } from '../actions/actions';

const initialState = 
{
    successLogin : false,    
    teacher: 
    {
        id: null,
        email :  null,        
        firstName: null,
        lastName: null,
    },
    courses: courses,
    registration: registrationCourses,
    //selectedItem: 0
 };
 
 const store = createStore(initialState);
 export default store;