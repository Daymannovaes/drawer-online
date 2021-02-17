import React, { useState } from 'react';
import './App.css';
import Tools from './components/tools';
import Drawer from './components/drawer';

function App() {
  const [selectedTool, selectTool] = useState();
  return (
    <div className="App">
      <Tools onSelectTool={selectTool} />
      <Drawer tool={selectedTool} />
    </div>
  );
}

export default App;
