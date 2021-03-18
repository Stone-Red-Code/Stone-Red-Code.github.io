let speed = 20;
let scale = 0.15;
let canvas;
let ctx;

let image = {
    x: -4,
    y: -4,
    xspeed: 5,
    yspeed: 5,
    img: new Image()
};

(function main() {
    canvas = document.getElementById("mainpanel");
    ctx = canvas.getContext("2d");
    image.img.src = 'https://github.com/Stone-Red-Code.png';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = 1000;
    canvas.height = 500;
    update();
})();

function update() {
    setTimeout(() => {
        ctx.fillStyle = 'transparent';
        ctx.fillRect(image.x, image.y, image.img.width * scale, image.img.height * scale);
        ctx.drawImage(image.img, image.x, image.y, image.img.width * scale, image.img.height * scale);

        image.x += image.xspeed;
        image.y += image.yspeed;

        checkCollision();
        update();
    }, speed)
}

function checkCollision() {
    if (image.x + image.img.width * scale >= canvas.width || image.x <= 0) {
        image.xspeed *= -1;
    }

    if (image.y + image.img.height * scale >= canvas.height || image.y <= 0) {
        image.yspeed *= -1;
    }
}