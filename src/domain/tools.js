/* eslint-disable max-classes-per-file */
// @todo abstract all generic methods to outside the class

function isTouchEvent(event) {
  return event.type.includes('touch');
}
class FreeDrawingTool {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
  }

  handleDrawer() {
    const { canvas } = this;

    canvas.addEventListener('mousemove', this.draw.bind(this));
    canvas.addEventListener('mousedown', this.startDrawing.bind(this));
    canvas.addEventListener('mouseup', this.endDrawing.bind(this));
    canvas.addEventListener('mouseout', this.endDrawing.bind(this));

    canvas.addEventListener('touchmove', this.draw.bind(this));
    canvas.addEventListener('touchstart', this.startDrawing.bind(this));
    canvas.addEventListener('touchend', this.endDrawing.bind(this));
    canvas.addEventListener('touchcancel', this.endDrawing.bind(this));
  }

  startDrawing(event) {
    this.drawing = true;

    this.context.moveTo(
      this.getRelativeMousePosition(event, 'x'),
      this.getRelativeMousePosition(event, 'y'),
    );

    return event;
  }

  endDrawing(event) {
    this.drawing = false;
    return event;
  }

  draw(event) {
    if (!this.drawing) return;

    const { context } = this;

    context.lineWidth = 5;
    context.strokeStyle = this.strokeColor || this.constructor.strokeColor;
    context.lineTo(
      this.getRelativeMousePosition(event, 'x'),
      this.getRelativeMousePosition(event, 'y'),
    );

    context.stroke();
    context.beginPath();

    context.moveTo(
      this.getRelativeMousePosition(event, 'x'),
      this.getRelativeMousePosition(event, 'y'),
    );
    // context.closePath();
  }

  getRelativeMousePosition(event, axis) {
    const offsetMap = {
      x: 'offsetLeft',
      y: 'offsetTop',
    };
    const mouseMap = {
      x: 'clientX',
      y: 'clientY',
    };
    const touchMap = {
      x: 'pageX',
      y: 'pageY',
    };

    const position = isTouchEvent(event)
      ? event.touches[0][touchMap[axis]]
      : event[mouseMap[axis]];

    return position - this.canvas[offsetMap[axis]];
  }

  static get name() {
    return 'free-draw';
  }

  get name() {
    return this.constructor.name;
  }
}

class PoligonalDrawingTool {
  static get disabled() {
    return true;
  }

  static get name() {
    return 'poligonal-draw';
  }

  get name() {
    return this.constructor.name;
  }
}

export default [FreeDrawingTool, PoligonalDrawingTool];
