function startGame(){
  myGameArea.start();
}

function updateGameArea() {
  myGameArea.clear();
  player.newPos();
  player.update();
  updateEnemy();
  checkGameOver();
  myGameArea.score();
}

function updateEnemy() {
    for (i = 0; i < myEnemy.length; i++) {
      if(myEnemy[i].x<=player.x+player.width+90 && myEnemy[i].x>player.x && myEnemy[i].y<=player.y+player.height+90 && myEnemy[i].y>player.y){
        myEnemy[i].x += -5;
        myEnemy[i].y += -2;
      } 
      else if (myEnemy[i].x<=player.x+player.width+90 && myEnemy[i].x>player.x && myEnemy[i].y+myEnemy[i].height>=player.y-90 && myEnemy[i].y+myEnemy[i].height<player.y){
        myEnemy[i].x += -5;
        myEnemy[i].y += +2;
      }
      else {
        myEnemy[i].x += -2;
        if (myEnemy[i].y + myEnemy[i].height + (Math.floor(Math.random() * 6) * (Math.round(Math.random()) ? 1 : -1)) > 500){
          myEnemy[i].y += (500 - (myEnemy[i].y + myEnemy[i].height));
        }
        else if (myEnemy[i].y + (Math.floor(Math.random() * 6) * (Math.round(Math.random()) ? 1 : -1)) < 0){
          myEnemy[i].y -= myEnemy[i].y
        }
        else{
          myEnemy[i].y += Math.floor(Math.random() * 6) * (Math.round(Math.random()) ? 1 : -1)
        }
      }
      myEnemy[i].update();
    }

  myGameArea.frames += 1;
  if (myGameArea.frames % 90 === 0) {
    let x = myGameArea.canvas.width;
    let y = Math.floor(Math.random() * (myGameArea.canvas.height-20));
    myEnemy.push(new Component(20, 20, 'green', x, y, "/images/Wasp.png"));
  }
}

function checkGameOver() {
  const crashed = myEnemy.some(function (obstacle) {
    return player.crashWith(obstacle);
  });
 
  if (crashed) {
    myGameArea.stop();
  }
}

const myEnemy = [];

const myGameArea = {
  canvas: document.createElement('canvas'),
  frames: 0,
  start: function () {
    this.canvas.width = 900;
    this.canvas.height = 500;
    this.canvas.style = 'border: 1px solid black;';
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },

  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  stop: function () {
    clearInterval(this.interval);
  },

  score: function () {
    const points = Math.floor(this.frames / 5);
    this.context.font = '18px Copperplate, Papyrus, fantasy';
    this.context.fillStyle = 'black';
    this.context.fillText(`Score: ${points}`, 25, 25);
  },

  // drawBackground (imageSource){
  //   let daCtx = this.ctx;
  //   this.img.src = imageSource;

  //   daCtx.drawBackground(this.img, this.x, this.y, this.width, this.height);
  // }

  // drawBackground: function (){
  //   const backgroundImage = new Image (this.canvas.width,this.canvas.height);
  //   backgroundImage.src = "/images/background.png"
  //   backgroundImage.onload = () =>{
  //     ctx.drawImage (backgroundImage,0,0,this.width,this.height)
  //   }
  // }
};

class Component {
  constructor(width, height, color, x, y, imageSource) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.img = new Image ();
    this.img.src = imageSource;
  }
 
  update() {
    const ctx = myGameArea.context;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    //ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.newPosX();
    this.newPosY();
  }

  newPosX(){
    if(this.x + this.width + this.speedX > 900){
      this.x += (900-(this.x + this.width));
    }
    else if (this.x + this.speedX < 0){
      this.x -= this.x;
    }
    else {
      this.x += this.speedX;
    }
  }

  newPosY(){
    if(this.y + this.height + this.speedY > 500){
      this.y += (500-(this.y + this.height));
    }
    else if (this.y + this.speedY < 0){
      this.y -= this.y;
    }
    else {
      this.y += this.speedY;
    }
}

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
 
  crashWith(obstacle) {
    return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
  }

  attractFieldLeft() {
    return this.x - 5;
  }
  attractFieldRight() {
    return this.x + this.width + 5;
  }
  attractFieldTop() {
    return this.y - 5;
  }
  attractFieldBottom() {
    return this.y + this.height + 5;
  }
}
const player = new Component(60, 60, 'red', 420, 220, "/images/SantaGif.gif");

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 38: // up arrow
    if (player.speedY >= -7){
      player.speedY -= 3;
    }
    else {
      player.speedY = -10;
    }
      break;
    case 40: // down arrow
    if (player.speedY <= 7){
      player.speedY += 3;
    }
    else {
      player.speedY = 10;
    }
      break;
    case 37: // left arrow
    if (player.speedX >= -7){
      player.speedX -= 3;
    }
    else {
      player.speedX = -10;
    }
      break;
    case 39: // right arrow
    if (player.speedX <= 7){
      player.speedX += 3;
    }
    else {
      player.speedX = 10;
    }
      break;
  }
});

document.addEventListener('keyup', (e) => {
  player.speedX = 0;
  player.speedY = 0;
});


startGame();