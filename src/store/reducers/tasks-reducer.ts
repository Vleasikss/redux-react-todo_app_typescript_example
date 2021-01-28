import {Task} from "../../models/Task";
import {ADD_TASK, DELETE_TASK} from "../actions";

const tasksReducer = (state:Array<Task> = [], action:any) => {
    let newState:Array<Task> = [];
    switch (action.type) {
        case ADD_TASK:
            newState = [...state, action.payload.task];
            return newState;
        case DELETE_TASK:
            return state.filter(task => task.id !== action.payload.id);
        default:
            return state;
    }
}
export default tasksReducer;