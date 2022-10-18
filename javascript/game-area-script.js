function startGame(){
    myGameArea.start();
  }

const myGameArea = {
    canvas: document.createElement('canvas'),
    frames: 0,
    start: function () {
      this.canvas.width = 900;
      this.canvas.height = 500;
      this.canvas.style = 'border: 1px solid black;';
      this.context = this.canvas.getContext('2d');
      backgroundMusic.loop = true;
      backgroundMusic.play();
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
      this.context.font = '32px Copperplate, Papyrus, fantasy';
      this.context.fillStyle = 'black';
      this.context.fillText(`Score: ${points}`, 25, 25);
    },
  
    lives: function(){
      this.context.font = '32px Copperplate, Papyrus, fantasy';
      this.context.fillStyle = 'black';
      this.context.fillText(`Lives: ${playerLives}`, 750, 25);
    },
  
    ammo: function(){
      this.context.font = '32px Copperplate, Papyrus, fantasy';
      this.context.fillStyle = 'black';
      this.context.fillText(`Bullets: ${ammunition}`, 25, 475);
    }
  };