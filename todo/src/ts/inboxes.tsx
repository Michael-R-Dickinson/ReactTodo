import React from 'react';
import { IconContext } from "react-icons";
import { InboxType, IconType, iconProperties } from './sidebar_types'


export default function Inboxes({ inboxes }: { inboxes: InboxType[] }) { // potential props: inboxes, iconSize
    const iconScale = 16;

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