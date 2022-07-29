export type IconType = (props: any) => JSX.Element;

export interface iconProperties {
    iconSrc: IconType,
    color: string,
    size: number,
}

export interface InboxType {
    inboxName: string,
    count: number,
    id: number,
    icon: iconProperties,
}

export type ProjectType = {
    name: string,
    priority: number,
    count: number,
    id: number
}


// export { Iinbox, iconProperties , IconType };