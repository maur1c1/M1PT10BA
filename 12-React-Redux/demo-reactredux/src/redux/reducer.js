import { AUMENTAR_CONTADOR, GET_USERS } from "./action-types";

const initialState = {
    count: 0,
    users: [],
    user: {}
}

const reducer = (state = initialState, action)=> {
    switch(action.type){
        case AUMENTAR_CONTADOR:
            return {
                ...state,
                count: state.count + 1
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default reducer;