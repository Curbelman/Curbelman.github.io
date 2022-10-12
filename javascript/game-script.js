const myGameArea = {
    canvas: document.createElement('canvas'),
    frames: 0, // check when it's time to add obstacles
    start: function () { // setting up canvas on the page
      this.canvas.width = 900;
      this.canvas.height = 700;
      this.canvas.style = 'position: absolute; top: 50px; left: 100px; right: 100px; margin: auto; border: 1px solid black;';
      this.context = this.canvas.getContext('2d');
      // this.drawBackground();
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      // call updateGameArea() every 20 milliseconds
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
        this.context.font = '18px serif';
        this.context.fillStyle = 'black';
        this.context.fillText(`Score: ${points}`, 350, 50);
      },
    //   drawBackground() {
    //     this.backgroundImg = new Image();
    //     this.backgroundImg.src ="./images/background.png"
    //     this.ctx.drawImage(
    //         this.backgroundImg,
    //         this.x,
    //         this.y,
    //         this.width,
    //         this.height
    //     );
    // }
  };

myGameArea.start();