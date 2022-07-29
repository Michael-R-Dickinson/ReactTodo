import React from 'react';

import { BsCalendarDate, BsFillInboxFill, BsCalendar3 } from 'react-icons/bs'
import { TbInboxOff, TbFilter } from 'react-icons/tb'

// Style
import './style/App.scss'


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;


function Heading({ title }: { title: string }) {
  return (
    <h1>{title}</h1>
  )
}

function Body({ }) {
  return <div className='body'><h1>Body</h1></div>
}

function Sidebar({ }) {
  return (
    <div className='sidebar'>
      <Inboxes />
      <Projects />
    </div>
  )
}

function Inboxes({ }) {
  const inboxes = [
    { name: 'Today', count: 2, id: 1 },
    { name: 'Upcoming', count: 1, id: 2 },
    { name: 'Filters', count: 1, id: 2 }
  ]

  const inboxCells = inboxes.map(inbox =>
    <Inbox name={inbox.name} count={inbox.count} id={inbox.id} />
  )

  return (
    <div className='inboxes'>{inboxCells}</div>
  )
}

function Inbox({ name, count, id }: { name: string, count: number, id: number }) {
  return (
    <div className='inbox'>
      <div className='title-container'>
        <InboxIcon inboxName={name} />
        <p>{name}</p>
      </div>
      <p>{count}</p>
    </div>
  )
}

function InboxIcon({ inboxName }: { inboxName: string }) {
  const inboxIconLookup = {
    'default': <TbInboxOff />,
    'Today': <BsCalendarDate />,
    'Upcoming': <BsCalendar3 />,
    'Filters': <TbFilter />

  }

  if (hasKey(inboxIconLookup, inboxName)) {
    return (inboxIconLookup[inboxName])
  }
  return inboxIconLookup.default;
}


function Projects({ }) {
  type project = {
    name: string,
    priority: number,
    count: number,
    id: number
  }
  const projects: project[] = [
    { name: 'project1', priority: 1, count: 2, id: 1 },
    { name: 'project2', priority: 2, count: 3, id: 2 }
  ]

  const projectCells = projects.map(project =>
    <Project {...project} />
  )

  return (
    <div className='projects'>
      {projectCells}
    </div>
  )
}


function Project({ name, priority, count, id }: { name: string, count: number, priority: number, id: number }) {
  enum projectPriorityColors {
    '#db503f' = 1,
    '#66b0d3',
    '#cbcecf'
  }

  return (
    <div className='project'>
      <div className='title-container'>
        <span className="dot" style={{ backgroundColor: projectPriorityColors[priority] }}></span>
        <p>{name}</p>
      </div>
      <p>{count}</p>
    </div>
  )
}



// Helper functions
function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj
}
