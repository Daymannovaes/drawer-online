// @todo abstract all generic methods to outside the class
class FreeDrawingTool {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
  }

  handleDrawer() {
    const { canvas } = this;

    canvas.addEventListener('mousemove', this.mouseMove.bind(this));
    canvas.addEventListener('mousedown', this.mouseDown.bind(this));
    canvas.addEventListener('mouseup', this.mouseUp.bind(this));
    canvas.addEventListener('mouseout', this.mouseOut.bind(this));
  }

  mouseDown(event) {
    this.drawing = true;
    this.context.moveTo(
      this.getRelativeMousePosition(event, 'x'),
      this.getRelativeMousePosition(event, 'y'),
    );
    return event;
  }

  mouseUp(event) {
    this.drawing = false;
    return event;
  }

  mouseOut(event) {
    this.drawing = false;
    return event;
  }

  mouseMove(event) {
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
    const axisMap = {
      x: ['clientX', 'offsetLeft'],
      y: ['clientY', 'offsetTop'],
    };

    return event[axisMap[axis][0]] - this.canvas[axisMap[axis][1]];
  }

  static get name() {
    return 'free-draw';
  }

  get name() {
    return this.constructor.name;
  }
}

export default [FreeDrawingTool];
