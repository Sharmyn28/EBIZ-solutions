import store from '../store/store';
import students from '../store/Students';
import {auth, database} from './firebase';

export const GrandTotal = (selectedItem) => {
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
}

export const getStudentName = (id) => {
    let student = students.filter(e => e.idStudent === id)
    return (student[0].lastName.toUpperCase() + ', ' + student[0].firstName);

}

export const changeMarks = (mark, num, selectedItem) => {
    if (num === 1) {
        const cloneMarks = [...store.getState().registration];
        cloneMarks[selectedItem].mark1 = mark; 
        
        store.setState({
            registration: cloneMarks
        })
        //console.log('mark1', mark)
    }else if (num === 2) {
        const cloneMarks2 = [...store.getState().registration];
        cloneMarks2[selectedItem].mark2 = mark;

        store.setState({
            registration: cloneMarks2
        })
    }
    //console.log('newmark', mark)
}

/****** FIREBASE *******/

function snapshotToArray (snapshot)  
{
    // let user = store.getState().user;
    let teachers = [];
    snapshot.forEach(childSnapshot => 
    {
        let item = childSnapshot.val();
        let key = childSnapshot.key;
        item.id = key;
        teachers.push(item);
    });
    store.setState({
        teachers: teachers
    }) 
    console.log("store", store.getState().teachers);    
}

export const readTeachers = () =>
{
    // let user = store.getState().user;    
    database
        .ref('teachers/')
        .once('value', (res) => {
            snapshotToArray(res)
        });    
}

export function signOut () 
{
    auth.signOut();
    store.setState({
        successLogin : false,
        teacher: 
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
        console.log("userObj", userObj)
        database.ref('teachers/' + userObj.uid).once('value').then(res => 
        {
            const fullUserInfo = res.val(); 
            console.log ('full info ', fullUserInfo);
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
               
        
            store.setState({
                teacher: 
                {
                    id : userObj.uid,
                    email :  fullUserInfo.email,
                    firstName :  fullUserInfo.firstName,
                    lastName :  fullUserInfo.lastName,  
                }
            })
            console.log("xxxxxxxxxxxxx")
            console.log("user", store.getState().user);                                        
        })
    })
}

auth.onAuthStateChanged(user => 
{
    if (user) {
        console.log('user', user);
        let usersRef = database.ref('users');
        let userRef = usersRef.child(user.uid);
        store.setState({
            successLogin : true
        })
    }
});

/****** GABY *******/