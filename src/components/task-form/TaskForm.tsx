import * as React from "react";
import {TaskFormState} from "../../models/TaskFormState";
import {useState} from "react";
import {Task} from "../../models/Task";
import {addTask} from "../../store/actions";
import {connect} from "react-redux";

type TaskFormProps = {
    onAddTask: (task:Task) => void
}
const TaskForm:React.FC<TaskFormProps> = ({onAddTask}) => {
    const [state,setState] = useState<TaskFormState>({currentTask: "", nextTaskId: 0});

    const addTask = () => {
        onAddTask({
            id: state.nextTaskId,
            description: state.currentTask
        });
        updateOnSubmit();
    }
    const updateOnSubmit = () => {
        setState({currentTask: "", nextTaskId: state.nextTaskId + 1})
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        addTask();
    }
    const handleInputChange = (e:any):void => {
        setState({...state, currentTask:e.target.value});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type={"text"}
                   placeholder={"add a task"}
                   onChange={handleInputChange}
                   value={state.currentTask}
            />
            <button type={"submit"}>Add task</button>
        </form>
    )

}

const mapActionsToProps = {
    onAddTask: addTask
}
export default connect(undefined, mapActionsToProps)(TaskForm);