import { BsCalendarDate, BsFillInboxFill, BsCalendar3, BsInbox } from 'react-icons/bs'
import { FiInbox } from 'react-icons/fi'
import { TbInboxOff, TbFilter } from 'react-icons/tb'

import { ProjectType, InboxType } from './sidebar/sidebar_types';
import { SettingsInterface, TaskGrouper, TaskInterface } from './body/body_types';
import { getDateTotal } from './utils';

export enum projectPriorityColors {
    '#3eb89d' = 1,
    '#66b0d3',
    '#a43eb8',
    '#3eb858',
}

export const defaultProjects: ProjectType[] = [
    { name: 'Computer Science', priority: 1, count: 2, id: 10 },
    { name: 'SAT Prep', priority: 2, count: 3, id: 20 },
    { name: 'React JS', priority: 3, count: 4, id: 30 }
]

export const defaultInboxes: InboxType[] = [
    { inboxName: 'Inbox', count: 4, icon: { iconSrc: FiInbox, size: 1, color: '#3d7fe3' }, id: 4 },
    { inboxName: 'Today', count: 2, icon: { iconSrc: BsCalendarDate, size: 1, color: '#269443' }, id: 3 },
    { inboxName: 'Upcoming', count: 1, icon: { iconSrc: BsCalendar3, size: 1, color: '#6d34c3' }, id: 2 },
    { inboxName: 'Filters', count: 1, icon: { iconSrc: TbFilter, size: 1, color: '#efaa51' }, id: 1 }
]

export const defaultSettings = {
    sort: {
        fn: (tasks: TaskInterface[]) => tasks,
        name: 'unsorted'
    },
    displayLabels: true,

}

export const defaultGroupers: TaskGrouper[] = [
    { name: 'Overdue', fn: (task: TaskInterface) => { const today = new Date; return getDateTotal(task.dueDate) < getDateTotal(today) }, allowAddTask: false },
    { name: 'Today', fn: (task: TaskInterface) => { const today = new Date; return getDateTotal(task.dueDate) == getDateTotal(today) }, allowAddTask: true },
    { name: 'Upcoming', fn: (task: TaskInterface) => { const today = new Date; return getDateTotal(task.dueDate) > getDateTotal(today) }, allowAddTask: false }

]

export const defaultTasks: TaskInterface[] = [
    {
        title: 'Today Task 1',
        description: 'Today Task 1 description',
        project: null,
        status: false,
        dueDate: new Date(),
        priority: 1,
        labels: [],
        comments: [],
        subTasks: [],
        id: 1,
    },
    {
        title: 'Today Task 2',
        description: 'Today Task 2 description',
        project: { name: 'project2', priority: 4, count: 2, id: 10 },
        status: false,
        dueDate: new Date(),
        priority: 2,
        labels: [],
        comments: [],
        subTasks: [],
        id: 2,
    },
    {
        title: 'Overdue Task 1',
        description: 'Overdue Task 1 description',
        project: { name: 'project3', priority: 2, count: 2, id: 10 },
        status: false,
        dueDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
        priority: 3,
        labels: [{ content: 'label3', color: 'rgb(74, 170, 214)', id: 1 }],
        comments: [],
        subTasks: [],
        id: 3,
    },
    {
        title: 'Future task 1',
        description: 'Future Task 1 description',
        project: { name: 'project1', priority: 1, count: 2, id: 10 },
        status: false,
        dueDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
        priority: 4,
        labels: [],
        comments: [],
        subTasks: [],
        id: 4,
    },
    {
        title: 'Go To Work',
        description: 'Future Task 1 description',
        project: { name: 'project1', priority: 1, count: 2, id: 10 },
        status: false,
        dueDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
        priority: 4,
        labels: [],
        comments: [],
        subTasks: [],
        id: 5,
    }



]

export const TaskOptions = {
    tasks: defaultTasks,
    setTasks: (tasks: TaskInterface[]) => { },
    openTask: (task: TaskInterface) => { },
}