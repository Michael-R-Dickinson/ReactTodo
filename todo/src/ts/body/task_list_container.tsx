import { TaskGrouper, TaskInterface } from './body_types';
import TaskList from './task_list';

function TaskListContainer({ taskGroupers, tasks }: {
    taskGroupers: TaskGrouper[],
    tasks: TaskInterface[],
}) {
    const taskLists = taskGroupers.map(
        ({ name, fn, allowAddTask }) =>
            <TaskList
                listName={name}
                tasks={tasks.filter((task) => fn(task))}
                allowAddTask={allowAddTask}
                key={name}
            />
    );

    return (
        <div className="task-lists-container">
            {taskLists}
        </div>)
}

export default TaskListContainer;