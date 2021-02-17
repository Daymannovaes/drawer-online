import React from 'react';
import tools from '../domain/tools';

export default function Tools({ onSelectTool }) {
  return (
    <div className="tools-container">
      {tools.map((tool) => (
        <button type="button" key={tool.name} onClick={() => onSelectTool(tool)}>
          {tool.name}
        </button>
      ))}
    </div>
  );
}
