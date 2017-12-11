import createStore from 'redux-zero';
import students from "./Students";
import registrationCourses from "./RegistrationCourses";
import teacher from "./teachers";
import course from "./Courses";

const initialState = 
{
    successLogin : false,    
    teacher: 
    {
        id: teacher[0].idTeacher,
        firstName: teacher[0].firstName,
        lastName: teacher[0].lastName,
    },
    registrationCourses: registrationCourses,
    registration: 
    {
        student: registrationCourses[0].idStudent,
        mark1 : registrationCourses[0].mark1,
        mark2 : registrationCourses[0].mark2,
        grandTotal: null
    },
 };
 
 const store = createStore(initialState);
 export default store;