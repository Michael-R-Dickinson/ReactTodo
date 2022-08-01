import AddTask from "./add_task";
import { TaskInterface } from "./body_types";
import Task from "./task";



function TaskList({ listName, tasks, allowAddTask }: { listName: string, tasks: TaskInterface[], allowAddTask: boolean }) {
    console.log(allowAddTask)
    return (
        <>
            <div className="task-list-header">
                <h3>{listName}</h3>
            </div>
            <div className="horizontal-line" />
            <div>
                {tasks.map((task) => <Task {...task} key={task.id} />)}
            </div>
            <div className="add-task-container">
                {allowAddTask && <AddTask />}
            </div>
        </>
    )
}


export default TaskList