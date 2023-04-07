import { createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;//es para conectar con la extension del navegador => REDUX DEVTOOLS

const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware())//ESTA LINEA ES PARA PODER HACER PETICIONES A UN SERVER.
    );

export default store;