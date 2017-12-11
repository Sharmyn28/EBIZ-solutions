import store from '../store/store';
import students from '../store/Students';

export const GrandTotal = (mark1, mark2) => {
    let totalMark = ((mark1 + mark2)/2);
    store.setState({
        registration:{
            grandTotal: totalMark,
        }
    })
    return totalMark;
}

export const getStudentName = (id) =>{
    let student = students.filter(e => e.idStudent === id)
    return (student[0].lastName.toUpperCase() + ',' + student[0].firstName);

}