import React from 'react';

import Body from './Body';
import Sidebar from './sidebar';

// Style
import '../style/App.scss'


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

// Helper functions
function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj
}
