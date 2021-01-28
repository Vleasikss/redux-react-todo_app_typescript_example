import React from "react";
import {connect} from "react-redux";
import {IAppState} from "./store/AppStore";
import TodoHeader from "./components/todo-header/TodoHeader";
import {Task} from "./models/Task";
import TaskForm from "./components/task-form/TaskForm";
import TaskList from "./components/task-list/TaskList";


type AppProps = {
    tasks: Array<Task>
}
const App:React.FC<AppProps> = ({tasks}) => {
    return(
        <div>
            <TodoHeader name={"test"}/>
            <TaskForm/>
            <TaskList tasks={tasks}/>
        </div>
    );


}

const mapStateToProps = (state:IAppState) => ({
    tasks: state.tasks,
})

export default connect(mapStateToProps)(App);