import { TaskInterface } from "./body_types";
import Task from "./task";



function TaskList({ listName, tasks }: { listName: string, tasks: TaskInterface[] }) {
    return (
        <>
            <div className="task-list-header">
                <h3>{listName}</h3>
            </div>
            <div className="horizontal-line" />
            <div className="task-list">
                {tasks.map((task) => <Task {...task} key={task.id} />)}
            </div>
        </>
    )
}


export default TaskList