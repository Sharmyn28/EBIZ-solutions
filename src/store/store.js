import createStore from 'redux-zero';
import students from "./Students";
import registrationCourses from "./RegistrationCourses";
<<<<<<< HEAD
//import teacher from "./Teachers";
=======
// import teacher from "./Teachers";
>>>>>>> e130fece4e79fd414c5f2a4227e94c84b69ac5b2
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
        rol: null
    },
    courses: courses,
    registration: registrationCourses,
    teacherClass: [],
    //selectedItem: 0
 };
 
 const store = createStore(initialState);
 export default store;