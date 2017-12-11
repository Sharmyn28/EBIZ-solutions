import createStore from 'redux-zero';

const initialState = {
    selectedSection: 1,
};

const store = createStore(initialState);
export default store;