import * as React from "react";
import {deleteTask} from "../../store/actions";
import {connect} from "react-redux";

type TaskEditButtonProps = {
    id:number,
    onEditTask: (id:number) => void
}
const TaskEditButton:React.FC<TaskEditButtonProps> = ({id,onEditTask}) => {
    const handleClick = () => {
        console.log("got id:" + id);
        onEdit();
    }
    const onEdit = () => {
        onEditTask(id);
    }
    return(
        <button onClick={handleClick}>edit</button>
    );
}

const mapActionsToProps = {
    //todo
    onEditTask: deleteTask
}
export default connect(undefined, mapActionsToProps)(TaskEditButton)