import React from 'react';
// import './App.css';

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
    { name: 'inbox1', count: 2, id: 1 },
    { name: 'inbox2', count: 1, id: 2 }
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
    <div className='inbox-container'>
      <p>{name}</p>
      <p>{count}</p>
    </div>
  )
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
    <div className='project-container'>
      <div className='project-title'>
        <span className="dot" style={{ backgroundColor: projectPriorityColors[priority] }}></span>
        <p>{name}</p>
      </div>
      <p>{count}</p>
    </div>
  )
}

