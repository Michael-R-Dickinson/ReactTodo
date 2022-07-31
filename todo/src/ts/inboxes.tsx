import React from 'react';
import { IconContext } from "react-icons";
import type { InboxType, IconType, iconProperties } from './sidebar_types'


export default function Inboxes({ inboxes, activeCell, setActiveCell }: {
    inboxes: InboxType[],
    activeCell: number,
    setActiveCell: (id: number) => void,
}) {
    const iconScale = 20; // grab from css

    const iconScaledInboxes = inboxes.map(inbox => scaleIconSize({ inbox: inbox, iconScale: iconScale }))
    const inboxCells = iconScaledInboxes.map(inbox =>
        <Inbox {...inbox} selected={inbox.id === activeCell} setActiveCell={setActiveCell} key={inbox.id} />
    )

    return (
        <div className='inboxes'>
            <IconContext.Provider value={{ color: 'navy', size: String(iconScale) }}>
                {inboxCells}
            </IconContext.Provider>
        </div>
    )
}

function Inbox({ inboxName, count, id, icon, selected, setActiveCell }: InboxType & { selected: boolean, setActiveCell: (id: number) => void }) {
    return (
        <div className={`inbox ${selected ? 'selected' : ""}`} onClick={() => setActiveCell(id)}>
            <div className='title-container'>
                <InboxIcon iconSrc={icon.iconSrc} size={icon.size} color={icon.color} />
                <p className='aligned-text'>{inboxName}</p>
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