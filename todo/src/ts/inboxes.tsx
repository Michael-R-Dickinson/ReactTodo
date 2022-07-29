import React from 'react';
import { IconContext } from "react-icons";
import { InboxType, IconType, iconProperties } from './sidebar_types'

import { BsCalendarDate, BsFillInboxFill, BsCalendar3 } from 'react-icons/bs'
import { TbInboxOff, TbFilter } from 'react-icons/tb'


export default function Inboxes({ }) { // potential props: inboxes, iconSize
    const iconScale = 16;

    const inboxes: InboxType[] = [
        { inboxName: 'Today', count: 2, icon: { iconSrc: BsCalendarDate, size: 1, color: 'red' }, id: 1 },
        { inboxName: 'Upcoming', count: 1, icon: { iconSrc: BsCalendar3, size: 1, color: 'blue' }, id: 2 },
        { inboxName: 'Filters', count: 1, icon: { iconSrc: TbFilter, size: 1, color: 'green' }, id: 2 }
    ]

    const iconScaledInboxes = inboxes.map(inbox => scaleIconSize({ inbox: inbox, iconScale: iconScale }))
    const inboxCells = iconScaledInboxes.map(inbox =>
        <Inbox {...inbox} />
    )

    return (
        <div className='inboxes'>
            <IconContext.Provider value={{ color: 'navy', size: String(iconScale) }}>
                {inboxCells}
            </IconContext.Provider>
        </div>
    )
}

function Inbox({ inboxName, count, id, icon }: InboxType) {
    return (
        <div className='inbox'>
            <div className='title-container'>
                <InboxIcon iconSrc={icon.iconSrc} size={icon.size} color={icon.color} />
                <p>{inboxName}</p>
            </div>
            <p>{count}</p>
        </div>
    )
}

function InboxIcon({ iconSrc, color, size }: iconProperties) {
    return React.createElement(iconSrc, { size: size, color: color })
}

function scaleIconSize({ inbox, iconScale }: { inbox: InboxType, iconScale: number }) {
    const iconScaledInbox = {
        ...inbox,
        icon: {
            ...inbox.icon,
            size: inbox.icon.size * iconScale
        }
    }

    return iconScaledInbox
}