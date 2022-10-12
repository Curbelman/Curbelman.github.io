// const myObstacles = [];// storing future obstacles

// const myGameArea = {
//     canvas: document.createElement('canvas'),
//     frames: 0, // check when it's time to add obstacles
//     start: function () { // setting up canvas on the page
//       this.canvas.width = 480;
//       this.canvas.height = 270;
//       this.canvas.style = 'border: 1px solid black;';
//       this.context = this.canvas.getContext('2d');
//       document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//       // call updateGameArea() every 20 milliseconds
//       this.interval = setInterval(updateGameArea, 20);
//     },
//     clear: function () {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//       },
//     stop: function () {
//         clearInterval(this.interval);
//       },
//     score: function () {
//         const points = Math.floor(this.frames / 5);
//         this.context.font = '18px serif';
//         this.context.fillStyle = 'black';
//         this.context.fillText(`Score: ${points}`, 350, 50);
//       },
//   };


//   class Component {
//     constructor(width, height, color, x, y) {
//       this.width = width;
//       this.height = height;
//       this.color = color;
//       this.x = x;
//       this.y = y;
//       this.speedX = 0;
//       this.speedY = 0;
//     }

//     newPos() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//       }
   
//     update() {
//       const ctx = myGameArea.context;
//       ctx.fillStyle = this.color;
//       ctx.fillRect(this.x, this.y, this.width, this.height);
//     }

//     left() {
//         return this.x;
//       }
//       right() {
//         return this.x + this.width;
//       }
//       top() {
//         return this.y;
//       }
//       bottom() {
//         return this.y + this.height;
//       }
//       crashWith(obstacle) {
//         return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
//       }
//   }

//   const player = new Component(30, 30, 'red', 0, 110);

//   function updateObstacles() {

//     for (i = 0; i < myObstacles.length; i++) {
//         myObstacles[i].x += -5;
//         myObstacles[i].update();
//     }

//     myGameArea.frames += 1;
//     if (myGameArea.frames % 120 === 0) { // every 2.4s
//       let x = myGameArea.canvas.width;
//       let minHeight = 20;
//       let maxHeight = 200;
//       let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
//       let minGap = 50;
//       let maxGap = 200;
//       let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
//       // add 2 new obstacles
//       myObstacles.push(new Component(10, height, 'green', x, 0));//
//       myObstacles.push(new Component(10, x - height - gap, 'green', x, height + gap));
//     }
//   }

//   function checkGameOver() {
//     // check if one obstacle has had a collision with player
//     const crashed = myObstacles.some(function (obstacle) { 
//       return player.crashWith(obstacle);
//     });
   
//     if (crashed) { // if there's a collision
//       myGameArea.stop(); // stops the game
//     }
//   }
//   function updateGameArea() {
//     myGameArea.clear(); // clear canvas
//     player.newPos(); // updating our player's position
//     player.update(); // redraw our player at his current position
//     updateObstacles(); // generate new Obstacles
//     checkGameOver() // stop the game if a collision happens
//     myGameArea.score(); // update the score of the player
// }

//   myGameArea.start();

//   document.addEventListener('keydown', (e) => {
//     switch (e.keyCode) {
//       case 38: // up arrow
//         player.speedY -= 1;
//         break;
//       case 40: // down arrow
//         player.speedY += 1;
//         break;
//       case 37: // left arrow
//         player.speedX -= 1;
//         break;
//       case 39: // right arrow
//         player.speedX += 1;
//         break;
//     }
//   });

//   document.addEventListener('keyup', (e) => {
//     player.speedX = 0;
//     player.speedY = 0;
//   });
// Footer
