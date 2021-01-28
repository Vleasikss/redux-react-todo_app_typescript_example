import {Task} from "../models/Task";
import {createStore} from "redux";
import allReducers from "./reducers/AllReducers";

export interface IAppState {
    tasks: Array<Task>
}

const INITIAL_STATE: IAppState = {
    tasks: [{id:1, description: "Null task"}]
}

const appStore = createStore(allReducers, INITIAL_STATE);

export { appStore };