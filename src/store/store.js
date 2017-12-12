import createStore from 'redux-zero';
import students from "./Students";
import registrationCourses from "./RegistrationCourses";
// import teacher from "./Teachers";
import courses from "./Courses";
import { GrandTotal } from '../actions/actions';

const initialState = 
{
    successLogin : false,    
    user: 
    {
        id: null,
        email :  null,        
        firstName: null,
        lastName: null,
        rol: null,
        teacherClass: [],
    },
    courses: courses,
    registration: registrationCourses,
    currentRol: null,
    //selectedItem: 0
 };
 
 const store = createStore(initialState);
 export default store;