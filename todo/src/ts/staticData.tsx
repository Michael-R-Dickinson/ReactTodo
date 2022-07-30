import { BsCalendarDate, BsFillInboxFill, BsCalendar3, BsInbox } from 'react-icons/bs'
import { FiInbox } from 'react-icons/fi'
import { TbInboxOff, TbFilter } from 'react-icons/tb'

import { ProjectType, InboxType } from './sidebar_types';
import { SettingsInterface, TaskInterface } from './body_types';

export const defaultProjects: ProjectType[] = [
    { name: 'project1', priority: 1, count: 2, id: 10 },
    { name: 'project2', priority: 2, count: 3, id: 20 },
    { name: 'project2', priority: 3, count: 4, id: 30 }
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