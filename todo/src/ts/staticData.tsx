import { BsCalendarDate, BsFillInboxFill, BsCalendar3 } from 'react-icons/bs'
import { TbInboxOff, TbFilter } from 'react-icons/tb'

import { ProjectType } from './sidebar_types';
import { InboxType } from './sidebar_types'


export const projects: ProjectType[] = [
    { name: 'project1', priority: 1, count: 2, id: 1 },
    { name: 'project2', priority: 2, count: 3, id: 2 },
    { name: 'project2', priority: 3, count: 4, id: 3 }
]

export const inboxes: InboxType[] = [
    { inboxName: 'Today', count: 2, icon: { iconSrc: BsCalendarDate, size: 1, color: 'red' }, id: 1 },
    { inboxName: 'Upcoming', count: 1, icon: { iconSrc: BsCalendar3, size: 1, color: 'blue' }, id: 2 },
    { inboxName: 'Filters', count: 1, icon: { iconSrc: TbFilter, size: 1, color: 'green' }, id: 2 }
]
