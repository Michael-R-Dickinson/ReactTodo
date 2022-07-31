import React, { useState } from 'react';

import Body from './body';
import Sidebar from './sidebar';


import { Md5 } from 'ts-md5/dist/md5';
import { defaultGroupers, defaultInboxes, defaultProjects, defaultTasks } from './staticData';

// Style
import '../style/App.scss';


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
      <Body tasks={defaultTasks} taskGroupers={defaultGroupers} />
    </div>
  );
}

export default App;

function hashObject(obj: any): number {
  return parseInt(Md5.hashStr(JSON.stringify(obj)).replace(/\D/g, ""))
}
