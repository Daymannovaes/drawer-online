import React, { useState } from 'react';
import './App.css';
import Tools from './components/tools';
import Drawer from './components/drawer';

function App() {
  const [selectedTool, selectTool] = useState();

  const handleSelectTool = (tool) => selectTool(() => tool);
  const handleChangeColor = (color) => {
    selectedTool.strokeColor = color;
  };

  return (
    <div className="App">
      <Tools onSelectTool={handleSelectTool} onChangeColor={handleChangeColor} />
      <Drawer Tool={selectedTool} />
    </div>
  );
}

export default App;
