import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todosReducer from "../react-redux-fetch/reducers/TodosReducers";


const store = createStore(todosReducer, applyMiddleware(thunk));
export default store;