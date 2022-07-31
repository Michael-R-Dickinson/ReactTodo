import { useContext } from 'react';
import SettingsContext from '../settings_context';

import { IconContext } from "react-icons";
import { BsArrowUp } from 'react-icons/bs'
import { GoSettings } from 'react-icons/go'

import { TaskInterface } from "./body_types"

export default function Header() {

    return (
        <>
            <div className='header'>
                <TodayDate />
                <SettingsPanelButton />
                <TaskSortDisplay />
            </div>
            <div className='horizontal-line'></div>
        </>
    )
}

function SettingsPanelButton() {
    const { settings, setSettings } = useContext(SettingsContext)
    const switchSort = () => {
        return settings.sort.name === 'unsorted' ?
            { ...settings, sort: { fn: (tasks: TaskInterface[]) => { tasks.sort((a, b) => a.priority - b.priority); return tasks }, name: 'priority' } } :
            { ...settings, sort: { fn: (tasks: TaskInterface[]) => tasks, name: 'unsorted' } }
    }

    return (
        <div className='top-right-box' onClick={() => setSettings(switchSort())}>
            <GoSettings className='settings-panel-icon' />
            <p>View</p>
        </div >
    )
}

function TaskSortDisplay() {
    const { settings } = useContext(SettingsContext)
    return (
        <div className='bottom-box'>
            <BsArrowUp className='task-sort-arrow' />
            <strong className='sort-display'>Sorted by: {settings.sort.name}</strong>

        </div>
    )

}

function TodayDate() {
    return (
        <div className='top-left-box'>
            <h2>Today</h2>
            <p>{new Date().toLocaleDateString()}</p>
        </div>
    )
}