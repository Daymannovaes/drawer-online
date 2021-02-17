/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import tools from '../domain/tools';

export default function Tools({ onSelectTool, onChangeColor }) {
  return (
    <div className="tools-container">
      <h1>Online Drawer</h1>
      <h4>Tools</h4>
      {tools.map((tool) => (
        <button type="button" disabled={tool.disabled} key={tool.name} onClick={() => onSelectTool(tool)}>
          {tool.name}
        </button>

      ))}

      <br />
      <br />
      <input name="color" placeholder="color" type="text" onInput={(event) => onChangeColor(event.target.value)} />
    </div>
  );
}
