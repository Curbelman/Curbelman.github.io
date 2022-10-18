class Component {
    constructor(width, height, color, x, y, imageSource) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
      this.speedX = 0;
      this.speedY = 0;
      this.time = 0;
      this.img = new Image ();
      this.img.src = imageSource;
    }
   
    update() {
      const ctx = myGameArea.context;
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      //ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
    shoot(){
      if (ammunition > 0){
      let x = this.x + this.width;
      let y = this.y + this.height/2;
      bullets.push (new Component(5, 2, 'blue', x, y, "/images/Bullet.png"));
      ammunition -= 1;
      shootSound.play();
      }
      else {
        noBulletsShotSound.play();
      }
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
  
  const player = new Component(60, 60, 'red', 420, 220, "/images/SantaManTransparent.png");
  
  const background = new Component(900, 500, 'red', 0,0, "/images/grass background.png");
  
  document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 38: // up arrow
      if (player.speedY >= -5){
        player.speedY -= 5;
      }
      else {
        player.speedY = -10;
      }
        break;
      case 40: // down arrow
      if (player.speedY <= 5){
        player.speedY += 5;
      }
      else {
        player.speedY = 10;
      }
        break;
      case 37: // left arrow
      if (player.speedX >= -5){
        player.speedX -= 5;
      }
      else {
        player.speedX = -10;
      }
        break;
      case 39: // right arrow
      if (player.speedX <= 5){
        player.speedX += 5;
      }
      else {
        player.speedX = 10;
      }
        break;
      case 32: // spacebar
      player.shoot();
    }
  });
  
  document.addEventListener('keyup', (e) => {
    player.speedX = 0;
    player.speedY = 0;
  });