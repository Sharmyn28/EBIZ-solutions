import createStore from 'redux-zero';
import students from "./Students";
import registrationCourses from "./RegistrationCourses";
import teacher from "./Teachers";
import course from "./Courses";
import { GrandTotal } from '../actions/actions';

const initialState = 
{
    successLogin : false,    
    teacher: 
    {
        id: teacher[0].idTeacher,
        firstName: teacher[0].firstName,
        lastName: teacher[0].lastName,
    },
    registration: registrationCourses,
    teacherClass: [],
    //selectedItem: 0
 };
 
 const store = createStore(initialState);
 export default store;