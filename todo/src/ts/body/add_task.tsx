import { useContext, useState } from "react";
import TaskOptionsContext from "../task_options_context";
import { hashObject } from "../utils";
import { TaskInterface } from "./body_types";
import DateTag from "./date_tag";
import { PlusIcon } from "./icons";
import { ProjectDisplayButton } from "./project_display";

function AddTask() {
    let taskTemplate: TaskInterface = {
        title: '',
        description: '',
        project: null,
        status: false,
        dueDate: new Date(),
        priority: 4,
        labels: [],
        comments: [],
        subTasks: [],
        id: 0
    }

    taskTemplate.id = hashObject(taskTemplate)

    const [newTask, setNewTask] = useState(taskTemplate);
    const [openPanel, setOpenPanel] = useState(false);

    const { tasks, setTasks } = useContext(TaskOptionsContext)

    const handleAddTask = (task: TaskInterface) => {
        setTasks([...tasks, task])
        setNewTask(taskTemplate)
    }

    const buttonClickable = (newTask.title != '' && newTask.description != '') ? 'clickable' : 'unclickable'

    if (openPanel) {
        return (
            <>
                <div className="add-task-panel">
                    <input
                        placeholder='Title'
                        className='new-task-title'
                        type='text'
                        value={newTask.title}
                        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    />

                    <input
                        placeholder='Description'
                        className='new-task-description'
                        type='text'
                        value={newTask.description}
                        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    />

                    <div className='info-buttons-container'>
                        <div className="info-button-container">
                            <DateTag dueDate={newTask.dueDate} />
                        </div>

                        <div className="info-button-container">
                            < ProjectDisplayButton project={newTask.project} />
                        </div>
                    </div>
                </div>
                <div className='confirm-add-task-container'>
                    <div className='cancel-button' onClick={() => setOpenPanel(false)}>
                        Cancel
                    </div>

                    <div className={`add-button ${buttonClickable}`}
                        onClick={(e) => handleAddTask(newTask)}>
                        Add Task
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="add-task-button" onClick={() => setOpenPanel(true)}>
            <PlusIcon className="plus-button" />
            <p>Add Task</p>
        </div>
    )
}

export default AddTask