import {Task} from "../../models/Task"

export const ADD_TASK = "tasks:addTask";
export const DELETE_TASK = "tasks:deleteTask";

export const addTask = (newTask: Task) => {
    return {
        type: ADD_TASK,
        payload: {
            task: newTask
        }
    }
}

export const deleteTask = (id:number) => {
    return {
        type: DELETE_TASK,
        payload: {
            id
        }
    }
}