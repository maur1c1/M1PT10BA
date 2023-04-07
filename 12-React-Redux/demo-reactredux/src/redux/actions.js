import { AUMENTAR_CONTADOR, GET_USERS } from "./action-types";

export const aumentarContador = ()=> {
    return {
        type: AUMENTAR_CONTADOR
    }
}

export const getUsers = ()=>{

    return function(dispatch) { // aca interviene el thunk
        fetch("https://jsonplaceholder.typecode.com/users")
        .then(res => res.json())
        .then(data => dispatch({type: GET_USERS, payload: data}))
    }
}