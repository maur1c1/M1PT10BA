const {createStore} = require("redux");

const initialState = {
    count: 0,
    professore: '',
    alumni: []

}

const reducer = (state = initialState, action)=>{ // action => {type: "CAMBIAR_PROFESSORE", payload: "Ric"}

    if( action.type === "AUMENTAR_COUNT" ){

        return {
            ...store,
            count: state.count + 1
        }
    }
    if( action.type === "CAMBIAR_PROFESSORE"){
      
        return{
            ...store,
            professore: action.payload
        }
    }

    if( action.type === "AGREGAR_ALUMNI"){
          return{
            ...store,
            alumni: action.payload

          }  
    }

}

const store = createStore(reducer);

store.dispatch({type: "AUMENTAR_COUNT"})
store.dispatch({type: "CAMBIAR_PROFESSORE", payload: "Rick"})
store.dispatch({type:"AGREGAR_ALUMNI", payload:["Felix", "Mauricio", "Kim", "Oska"]})
console.log(store.getState());// {count: 1, professore: "Rick", alumni:[] }
