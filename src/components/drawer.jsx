import React, { useEffect, useRef } from 'react';

export default function Drawer({ Tool }) {
  const canvasReference = useRef();

  useEffect(() => {
    const canvas = canvasReference.current;
    const context = canvas.getContext('2d');

    if (Tool && context) {
      const tool = new Tool(canvas, context);
      tool.handleDrawer();
    }
  });

  return (
    <div className="canvas-container">
      <canvas ref={canvasReference} width="1500" height="800" />
      <div className="selected-tool">
        Selected tool:
        {' '}
        {Tool?.name}
      </div>
    </div>
  );
}
