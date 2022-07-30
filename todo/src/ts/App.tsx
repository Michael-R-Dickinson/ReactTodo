import React, { useState } from 'react';

import Body from './Body';
import Sidebar from './sidebar';


import { defaultInboxes, defaultProjects } from './staticData'
import { Md5 } from 'ts-md5/dist/md5';

// Style
import '../style/App.scss'


function App() {
  const projects = defaultProjects.map((project) => {
    let hashedProject = { ...project, id: hashObject(project) }
    return hashedProject
  })

  const inboxes = defaultInboxes.map((inbox) => {
    let hashedInbox = { ...inbox, id: hashObject(inbox) }
    return hashedInbox
  })

  // const [activeInbox, setActiveInbox] = useState<number>(inboxes[0].id)
  const [activeCell, setActiveCell] = useState<number>(inboxes[0].id)

  return (
    <div className="App">
      <Sidebar
        inboxes={inboxes}
        projects={projects}
        activeCell={activeCell}
        setActiveCell={setActiveCell}
      />
      <Body />
    </div>
  );
}

export default App;

function hashObject(obj: any): number {
  return parseInt(Md5.hashStr(JSON.stringify(obj)).replace(/\D/g, ""))
}
