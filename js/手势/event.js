const my = document.querySelector('#my');
// 即兼容mobile pc

// mousedown

my.addEventListener('mousedown', (event) => {
    start(event);
    function mouseMove(e) {
        move(e);
    }
    function mouseEnd(e) {
        end(e)
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseEnd);
    }
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseEnd)
})

my.addEventListener('touchstart', (event) => {
    const touch = event.changedTouches[0];
    // console.log(touch);
    start(touch);
})
my.addEventListener('touchmove', (event) => {
    const touch = event.changedTouches[0];
    move(touch)
})
my.addEventListener('touchend', (event) => {
    const touch = event.changedTouches[0];
    end(touch)
})
let timeout = null;
let isTap = false, isPan = false, isPress = false;
let startX = 0, startY = 0;
function start(point) {
    console.log('start', point);
    isTap = true;
    startX = point.clientX;
    startY = point.clientY;
    timeout = setTimeout(() => {
        if (isPan) return false;
        isPress = true;
        isTap = false;
    }, 500);
}
let moves = [];
function move(point) {
    console.log('move', point);
    let dx = point.clientX - startX;
    let dy = point.clientY - startY;
    // 距离
    if (dx ** 2 + dy ** 2 > 100) {
        isPan = true;
        isTap = false;
        isPress = false;
    }
    if (isPan) {
        moves.push({ dx, dy, t: Date.now() })
        moves = moves.filter(r => Date.now() - r.t < 300)
    }
}
function end(point) {
    console.log('end', point);
    let lastPoint = moves[0];
    let dx = point.clientX - startX;
    let dy = point.clientY - startY;
    let time300dx = dx - lastPoint.dx;
    let time300dy = dy - lastPoint.dy;
    let speed = Math.sqrt(time300dx ** 2 + time300dy ** 2) / (Date.now() - lastPoint.t);
    if (speed > 2.5) {
        console.log('flick');
    }
    clearTimeout(timeout)
    if (isTap) {
        console.log('tap发生')
        isTap = false;

    }
    if (isPan) { console.log('pan发生'); isPan = false; }
    if (isPress) { console.log('press发生'); isPress = false; }
}
