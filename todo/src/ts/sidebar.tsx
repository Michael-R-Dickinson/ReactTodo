import Inboxes from './inboxes'
import Projects from './projects'

export default function Sidebar({ }) {
    return (
        <div className='sidebar'>
            <Inboxes />
            <Projects />
        </div>
    )
}
