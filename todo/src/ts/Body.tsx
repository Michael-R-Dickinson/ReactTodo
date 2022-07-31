import { useState } from 'react';

import Header from './header';
import TaskListContainer from './task_list_container';

import { SettingsProvider } from "./settings_context";
import { defaultSettings } from './staticData';
import { TaskInterface, TaskGrouper } from './body_types';


export default function Body({ tasks, taskGroupers }: { tasks: TaskInterface[], taskGroupers: TaskGrouper[] }) {
    const [settings, setSettings] = useState(defaultSettings)
    const value = { settings: settings, setSettings: setSettings }
    return (
        <div className='body'>
            <SettingsProvider value={value}>
                <Header />
                <TaskListContainer tasks={tasks} taskGroupers={taskGroupers} />
            </SettingsProvider>
        </div>)
}
