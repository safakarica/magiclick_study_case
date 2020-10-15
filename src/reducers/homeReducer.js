import {
    RECEIVE_PRODUCTS,
} from '../constants/actionTypes'

const initialState = { };

const HomeReducer = (state = initialState, action) => {

    switch (action.type) {

        case RECEIVE_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
};

export default HomeReducer;
