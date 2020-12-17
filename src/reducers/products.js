import {GET_PRODUCTS} from '../actions/actionTypes'

export default function rootReducer(state = [], action) {
    switch(action.type) {
        case GET_PRODUCTS:
            return([...action.products])
        default:
            return state;
    }
}