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
let color = 0;
let direction = true;
 
let draw = (e) => {
    if (!isDrawing) return;
    CTX.strokeStyle = `hsl(${color}, 100%, 50%)`;
    CTX.beginPath();
    CTX.moveTo(lastX, lastY);
    CTX.lineTo(e.offsetX, e.offsetY);
    CTX.stroke();

    lastX = e.offsetX;
    lastY = e.offsetY;
    color++;
    if (color > 360) {
        color = 0;
    }  
    if (CTX.lineWidth >= 100 || CTX.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        CTX.lineWidth++;
    } else {
        CTX.lineWidth--;
    }
}


CANVAS.addEventListener('mousemove', draw);
CANVAS.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

CANVAS.addEventListener('mouseup', () => isDrawing = false);
CANVAS.addEventListener('mouseout', () => isDrawing = false);

