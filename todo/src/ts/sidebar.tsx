import Inboxes from './inboxes'
import Projects from './projects'

import { ProjectType } from './sidebar_types';
import { InboxType } from './sidebar_types'


export default function Sidebar({ inboxes, projects, activeCell, setActiveCell }: {
    inboxes: InboxType[]
    projects: ProjectType[],
    activeCell: number,
    setActiveCell: (id: number) => void
}) {
    return (
        <div className='sidebar'>
            <Inboxes inboxes={inboxes} activeCell={activeCell} setActiveCell={setActiveCell} />
            <Projects projects={projects} activeCell={activeCell} setActiveCell={setActiveCell} />
        </div>
    )
}
