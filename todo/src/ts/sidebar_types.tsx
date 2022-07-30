type IconType = (props: any) => JSX.Element;

interface iconProperties {
    iconSrc: IconType,
    color: string,
    size: number,
}

type InboxType = {
    inboxName: string,
    count: number,
    id: number,
    icon: iconProperties,
}

type ProjectType = {
    name: string,
    priority: number,
    count: number,
    id: number
}


export type { InboxType, ProjectType, iconProperties, IconType };