import { INCREMENT,DECREMENT,RESET } from "../constant/Counterconstant"

export const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
}
export const decrementCounter = () => {
    return {
        type: DECREMENT,
    }
}
export const restCounter = () => {
    return {
        type: RESET,
    }
}