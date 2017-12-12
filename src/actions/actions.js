import store from '../store/store';
import students from '../store/Students';
import users from '../store/Users';
import {auth, database} from './firebase';
import Utils from '../Utils';

/*export const GrandTotal = (selectedItem) => {
    //console.log(selectedItem)
    let mark1 = store.getState().registration[selectedItem].mark1;
    let mark2 = store.getState().registration[selectedItem].mark2;
    let totalMark = ((mark1 + mark2) / 2);
    
    const cloneList = [...store.getState().registration];
    cloneList[selectedItem].gradeTotal = totalMark; 
    
    store.setState({
        registration: cloneList
    })
    return totalMark;
}*/

export const getStudentName = (id) => {
    let student = students.filter(e => e.idStudent === id)
    return (student[0].lastName.toUpperCase() + ', ' + student[0].firstName);

}

export const changeMarks = (mark, num, selectedItem) => {
    if (num === 1) {
        const cloneMarks = [...store.getState().user.teacherClass];
        cloneMarks[selectedItem].mark1 = mark; 
        
        store.setState({
            user:
            {
                teacherClass: cloneMarks
            }
        })
        Utils.store("state", store.getState());
        //console.log('mark1', mark)
    }else if (num === 2) {
        const cloneMarks2 = [...store.getState().user.teacherClass];
        cloneMarks2[selectedItem].mark2 = mark;

        store.setState({
            user:
            {
                teacherClass: cloneMarks2
            }
        })
        console.log(store.getState())
        Utils.store("state", store.getState());
        
    }
    //console.log('newmark', mark)
}

export const getTeacherStudents = (id) => {
    const classes = [...store.getState().registration];
    const cloneUser = store.getState().user;    
    let students = classes.filter(e => e.idCourse === id)
    console.log('cloneUser', store.getState().user);
    store.setState({
        user:
        {
            id : cloneUser.idUser,
            email :  cloneUser.email,
            firstName :  cloneUser.firstName,
            lastName :  cloneUser.lastName,  
            rol: cloneUser.rol,
            teacherClass: students
        }
    });
    console.log('user get', store.getState().user);    
    Utils.store("state", store.getState());
    
    //return (student[0].lastName.toUpperCase() + ', ' + student[0].firstName);
}


/****** FIREBASE *******/

function snapshotToArray (snapshot)  
{
    // let user = store.getState().user;
    let users = [];
    snapshot.forEach(childSnapshot => 
    {
        let item = childSnapshot.val();
        let key = childSnapshot.key;
        item.id = key;
        users.push(item);
    });
    store.setState({
        users: users
    }) 
    //console.log("store", store.getState().users);    
}

export const readUsers = () =>
{
    // let user = store.getState().user;    
    database
        .ref('users/')
        .once('value', (res) => {
            snapshotToArray(res)
        });    
}

export function signOut () 
{
    auth.signOut();
    store.setState({
        successLogin : false,
        user: 
        {
            id : "",
            email :  "",
            firstName :  "",
            lastName :  "", 
        }
    })
}

export function signIn (user, password) 
{
    auth.signInWithEmailAndPassword(user, password).then(userObj => 
    {
        //console.log("userObj", userObj)
        database.ref('users/' + userObj.uid).once('value').then(res => 
        {
            const fullUserInfo = res.val(); 
            //console.log ('full info ', fullUserInfo);
            // if(!fullUserInfo)
            //     fullUserInfo = [];
            // database.ref('users/' + userObj.uid + '/boards').once('value').then(res =>
            // {
            //     let boards = res;
            //     let boardObjs = [];
            //     boards.forEach(item => {
            //         let obj = item.val();
            //         console.log("obj", obj)
            //         obj.id = item.key;
            //         boardObjs.push(obj);
            //     })
            //     console.log("boardObjs", boardObjs);            
            //     fullUserInfo.boards = boardObjs;
            //     console.log("fullUserInfo.boards", fullUserInfo.boards);                            
            // console.log("user", store.getState().user);                                        
            
            // })
               
        
            // store.setState({
            //     teacher: 
            //     {
            //         id : fullUserInfo.id,
            //         email :  fullUserInfo.email,
            //         firstName :  fullUserInfo.firstName,
            //         lastName :  fullUserInfo.lastName,  
            //     }
            // })
            //console.log("xxxxxxxxxxxxx")
            //console.log("user", store.getState().user);                                        
        })
    getTeacher(user);
    
    })

}

auth.onAuthStateChanged(user => 
{
    if (user) {
        //console.log('user', user);
        let usersRef = database.ref('users');
        let userRef = usersRef.child(user.uid);
        database.ref('users/' + user.uid).once('value').then(res => {
            const fullUserInfo = res.val();
        console.log("userRef", userRef)
        console.log("fullUserInfo", fullUserInfo)  
        let state = Utils.store("state");
        console.log(state);
        // store.setState(state);
        store.setState({
            successLogin : true,
            user: 
            {
                id : fullUserInfo.idUser,
                email :  fullUserInfo.email,
                firstName :  fullUserInfo.firstName,
                lastName :  fullUserInfo.lastName,  
                rol: fullUserInfo.rol,
                teacherClass: fullUserInfo.teacherClass
            }
        })
        Utils.store("state", store.getState());        
    console.log("store auth", store.getState().user)
    
    });
    }
});

/****** GABY *******/
export const filterCourses = () =>
{
    let cloneCourses = [...store.getState().courses];
    console.log("store filter", store.getState().user)
    //console.log("cloneCourses", cloneCourses);
    let id = store.getState().user.id;
    //console.log("id", id);    
    cloneCourses = cloneCourses.filter((course) => course.idTeacher === id)
    return cloneCourses;
}

export const getTeacher = (user) => {
    let teacher = users.filter(item => item.email === user)
    console.log("teacher fd", user)
    store.setState({
        user : 
        {
            id: teacher[0].idUser,
            firstName: teacher[0].firstName,
            lastName: teacher[0].lastName,
        }
    })
    Utils.store("state", store.getState());    
    console.log("store teacher", store.getState().user)
}

export const saveCourses = (courses) =>
{
    store.setState({
        courses : courses,
    })
}

export const saveRol = (rol) =>
{
    console.log(rol);
    let newRol = rol;
    store.setState({
        currentRol : newRol,
    });
    Utils.store("state", store.getState());    
}