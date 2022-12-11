import axios from "axios";
import{ GET_TODOS_REQUEST,GET_TODOS_SUCCESS,GET_TODOS_FAILED} from "../constants/TodosConstants"

export const getAllTodos = () => async(dispatch) =>
 {
  try {
    dispatch({type: GET_TODOS_REQUEST});
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({type: GET_TODOS_SUCCESS, payload: res.data});
  } catch (error) {
    dispatch({type: GET_TODOS_FAILED, payload: error.message});
  }
    
}