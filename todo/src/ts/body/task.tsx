import { TaskInterface } from "./body_types";
import { ReactComponent as PriorityCircle } from '../../icons/circle.svg'
import DateTag from "./date_tag";
import Labels from "./labels";

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
    return (
        <>
            <div className="task-container">
                <div className="task-left-section">
                    <PriorityIcon className={`priority-icon priority-${priority}`} />
                    {/* <PriorityCircle className="priority-icon" /> */}
                    <h5 className="title">{title}</h5>

                    <p className="grid-flowing-item">{description}</p>
                    <div className="grid-flowing-item">
                        <DateTag dueDate={dueDate} />
                        <Labels labels={labels} />
                    </div>
                </div>

            </div>

            <div className="horizontal-line" />
        </>
    )
}

export default Task;

function PriorityIcon({ className }: { className: string }) {
    return (
        <svg className={className} viewBox="3 3 18 18">
            <path d="M12 7a5 5 0 110 10 5 5 0 010-10z"></path>
        </svg>

    )
}