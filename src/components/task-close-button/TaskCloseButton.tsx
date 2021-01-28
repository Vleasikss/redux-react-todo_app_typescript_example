import * as React from "react";
import {connect} from "react-redux";
import {deleteTask} from "../../store/actions";


type TaskCloseButtonProps = {
    id: number,
    onRemoveTask: (id:number) => void
}
const TaskCloseButton:React.FC<TaskCloseButtonProps> = ({id,onRemoveTask}) => {
    
    const onRemove = () => {
        onRemoveTask(id);
    }
    const handleClick = () => {
        console.log("got id: " + id);
        onRemove();
    }

    return(
        <button onClick={handleClick}>x</button>
    )
}

const mapActionsToProps = {
    onRemoveTask: deleteTask
}

export default connect(undefined, mapActionsToProps)(TaskCloseButton);