import * as React from "react";

type ITodoHeaderProps = {
    name: string
}
const TodoHeader:React.FC<ITodoHeaderProps> = ({name}) => {
    return (
        <h1>React typescript todo list {name}</h1>
    )
}
export default TodoHeader;