import { ProjectType } from './sidebar_types'

interface SettingsInterface {
    sort: SortInterface,
    displayLabels: boolean,
}

interface SortInterface {
    fn: (tasks: TaskInterface[]) => TaskInterface[],
    name: string,
}

interface TaskInterface {
    title: string;
    description: string;
    project: ProjectType;
    status: boolean;
    dueDate: Date;
    priority: number;
    labels: LabelInterface[];
    comments: CommentInterface[]
    subTasks: TaskInterface[];
    id: number;
}

interface LabelInterface {
    content: string;
    color: string;
    id: number;
}

interface CommentInterface {
    content: string;
    author: AuthorInterface,
    date: Date
    id: number;

}

interface AuthorInterface {
    name: string;
    id: number;
}


export type { SettingsInterface, TaskInterface, LabelInterface, CommentInterface, AuthorInterface }