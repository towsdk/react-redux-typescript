const  axios  = require("axios");
const { createStore,applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null,
}

//action type

const getTodosRequest = () => {
    return {
        type: GET_TODOS_REQUEST,
    }
}
const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_REQUEST,
        payload: error,
    }
}
const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos,
    }
}

//async 
const fetchData = () => {
    return (dispatch)=>{
        dispatch(getTodosRequest());
        axios
        .get(API_URL)
        .then((res) => {
            const todos= res.data;
            const titles = todos.map(todo=> todo.title);
                
            
            console.log(titles);
    })
        .catch((error)=> {
            console.log(error.message);
        })
    }
};

//setting reducer
const totosReducer = (state=initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return{
                ...state,
                isLoading: false,
            }

        case GET_TODOS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                todos: action.payload,
            }

        case GET_TODOS_FAILED:
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }
    
        default:
            return state;
    }
};

//const 

const store = createStore(totosReducer, applyMiddleware(thunk));

store.subscribe(()=> {
    console.log(store.getState());
});

store.dispatch(fetchData());