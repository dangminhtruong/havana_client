import action from '../actions/actionTypes';
import axios from '../../axios';
import _ from 'lodash';

const initialState = {
    newProducts : []
}

const reducer = ( state = initialState, action ) => {
    switch (action.type){
        case action.RETRIVER_NEW_PRODUCTS :
            return retrieveNewProducts();
    }
    return state;
}

// CHANGE

let retrieveNewProducts = () => {
    axios.get('index-data')
    .then((response) => {
        console.log(response);
        newProducts : response.data.newProducts
    });
}




export default reducer;