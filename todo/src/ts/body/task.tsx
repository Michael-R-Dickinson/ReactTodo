import { useContext } from "react";
import { ProjectType } from "../sidebar/sidebar_types";
import TaskOptionsContext from "../task_options_context";
import { delay } from "../utils";
import { TaskInterface } from "./body_types";
import DateTag from "./date_tag";
import { PriorityIcon, ProjectIcon } from "./icons";
import Labels from "./labels";
import ProjectDisplay from "./project_display";

function Task({
    title,
    description,
    project,
    status,
    dueDate,
    priority,
    labels,
    comments,
    subTasks,
    id,
}: TaskInterface) {
    const { setTasks, tasks } = useContext(TaskOptionsContext);

    return (
        <>
            <div className="task-container">
                <div className="task-left-section">
                    <PriorityIcon
                        className={`priority-${priority}`}
                        onClick={async () => { await delay(200); setTasks(tasks.filter(task => task.id !== id)) }}
                    />
                    <h5 className="title">{title}</h5>

                    <p className="grid-flowing-item">{description}</p>
                    <div className="grid-flowing-item">
                        <DateTag dueDate={dueDate} />
                        <Labels labels={labels} />
                    </div>
                </div>

                <ProjectDisplay project={project} />
            </div>

            <div className="horizontal-line" />
        </>
    )
}

export default Task;

