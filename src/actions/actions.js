import store from '../store/store';
import students from '../store/Students';

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
    return (student[0].lastName.toUpperCase() + ',' + student[0].firstName);

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