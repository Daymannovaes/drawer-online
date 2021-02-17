import React, { useEffect, useRef } from 'react';

export default function Drawer({ tool }) {
  const canvasReference = useRef();

  useEffect(() => {
    const canvas = canvasReference.current;
    const context = canvas.getContext('2d');

    if (tool) tool.handleDrawer(context);
  });

  return (
    <div className="canvas-container">
      <canvas ref={canvasReference} />
    </div>
  );
}
