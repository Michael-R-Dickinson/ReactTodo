import { useState } from 'react';

import Body from './body/body';
import Sidebar from './sidebar/sidebar';


import { defaultGroupers, defaultInboxes, defaultProjects, defaultTasks } from './staticData';

// Style
import '../style/App.scss';
import { TaskInterface } from './body/body_types';
import { TaskOptionsProvider } from './task_options_context';
import { hashObject } from './utils';


function App() {
  const projects = defaultProjects.map((project) => {
    let hashedProject = { ...project, id: hashObject(project) }
    return hashedProject
  })

  const inboxes = defaultInboxes.map((inbox) => {
    let hashedInbox = { ...inbox, id: hashObject(inbox) }
    return hashedInbox
  })

  const [activeCell, setActiveCell] = useState<number>(inboxes[0].id)

  const [tasks, setTasks] = useState(defaultTasks)

  const openTask = (task: TaskInterface) => { }
  const taskOptions = {
    tasks: tasks, setTasks: setTasks, openTask
  }

  return (
    <div className="App">
      <Sidebar
        inboxes={inboxes}
        projects={projects}
        activeCell={activeCell}
        setActiveCell={setActiveCell}
      />

      <TaskOptionsProvider value={taskOptions} >
        <Body
          tasks={tasks}
          taskGroupers={defaultGroupers} />
      </TaskOptionsProvider>
    </div >
  );
}

export default App;

// TODO
//get segoi semi bold
//change priority button colors lower opacity