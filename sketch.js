let rectangles = [];
let images = []
let toggle = false
let dragpoint = null

function preload() {
  for (var i = 0; i < 25; i++) {
    images[i] = loadImage("../dress-up_pngs/vivis_room/vivis-room" + i + ".png")
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 25; i++) {
    let x = images[i].width;
    let y = images[i].height;
    let w = images[i].width;
    let h = images[i].height;

    rectangles[i] = new Rectangle(x, y, w, h, images[i]);
  }
  imageResize()
  setPosition()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function imageResize() {
    for (let i = 0; i < images.length; i++) {
      images[i].width = images[i].width / 2
      images[i].height = images[i].height / 2
      console.log(images[i].height)
      // 
  }
}

function draw() {
  clear();
  for (i = 0; i < rectangles.length; i++) {
      rectangles[i].show(mouseX, mouseY);
    }
}

function setPosition() {
  for (var i = 0; i < rectangles.length; i++) {
    rectangles[i].x = random(0, width)
    rectangles[i].y = random(0, height)
  }
}

function mousePressed() {
  for (let i = 0; i < rectangles.length; i++) {
      rectangles[i].pressed(mouseX, mouseY);
    }
  }

function mouseReleased() {
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].notPressed();
  }
  dragpoint = null
}

class Rectangle {
  constructor(x, y, w, h, emoji) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = emoji;
    this.offsetX = 0;
    this.offsetY = 0;
    this.dragging = false; // relevant? 
  }

  show(mx, my) {
    if (this.dragging) {
      this.x = mx + this.offsetX;
      this.y = my + this.offsetY;
    }
    image(this.img, this.x, this.y, this.w, this.h);
  }

  pressed(mx, my) {
    if (mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h && toggle == false) {
      toggle = true
      this.dragging = true;
      this.selected = true;
      this.offsetX = this.x - mx;
      this.offsetY = this.y - my;
    }
  }

  notPressed() {
    this.dragging = false; // relevant?
    toggle = false
  }
}