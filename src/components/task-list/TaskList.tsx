import * as React from "react";
import {Task} from "../../models/Task";
import TaskEditButton from "../task-edit-button/TaskEditButton";
import TaskCloseButton from "../task-close-button/TaskCloseButton";

type TaskListProps = {
    tasks: Array<Task>
}
const TaskList:React.FC<TaskListProps> = ({tasks}) => {

   const renderTasks = () => {
       return tasks.map((task:Task, index:number) => {
           return (
               <tr key={index}>
                   <td>{ task.description }</td>
                   <td>
                       <TaskEditButton id={task.id}/>
                       <TaskCloseButton id={task.id}/>
                   </td>
               </tr>
           );
       });
   }
   return (
       <table>
           <thead>
           <tr>
               <th>task</th>
               <th>action</th>
           </tr>
           </thead>
           <tbody>
           { renderTasks() }
           </tbody>
       </table>
   );
}
export default TaskList;