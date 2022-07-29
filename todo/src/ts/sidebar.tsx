import Inboxes from './inboxes'
import Projects from './projects'

import { ProjectType } from './sidebar_types';
import { InboxType } from './sidebar_types'


export default function Sidebar({ projects, inboxes }: { projects: ProjectType[], inboxes: InboxType[] }) {
    return (
        <div className='sidebar'>
            <Inboxes inboxes={inboxes} />
            <Projects projects={projects} />
        </div>
    )
}
