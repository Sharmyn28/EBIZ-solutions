import store from '../store/store';

export const GrandTotal = (mark1, mark2) => {
    let totalMark = ((mark1 + mark2)/2);
    console.log(GrandTotal, 'dfadsf');
    store.setState({
        registration:{
            grandTotal: totalMark,
        }
    })
    console.log(totalMark);
    return totalMark;
}