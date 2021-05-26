const CANVAS = document.querySelector('#draw');
const CTX = CANVAS.getContext('2d');

CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;
CTX.strokeStyle = '#BADASS';
CTX.lineJoin = 'round';
CTX.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

let draw = (e) => {
    if (!isDrawing) return;
    console.log(e);
}

CANVAS.addEventListener('mousemove', draw);
CANVAS.addEventListener('mousedown', () => isDrawing = true);
CANVAS.addEventListener('mouseup', () => isDrawing = false);
CANVAS.addEventListener('mouseout', () => isDrawing = false);