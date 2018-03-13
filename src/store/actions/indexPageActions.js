import actionTypes from './actionTypes';
import axios from '../../axios';

export const setNewProducts = (newProducts) => {
    return {
        type : actionTypes.RETRIVER_NEW_PRODUCTS,
        newProducts : newProducts
    }
}

export const retrieveNewProducs = () => {
    return dispatch => {
        axios.get( 'index-data' )
            .then( response => {
                console.log(response);
               dispatch(setNewProducts(response.data.newProducts));
            })
    };
}