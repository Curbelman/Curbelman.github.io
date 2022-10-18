function updateGameArea() {
    myGameArea.clear();
    background.update();
    player.newPos();
    player.update();
    updateCats();
    updateEnemy();
    updateShrooms();
    updateBullets();
    checkPetCat();
    checkEnemyShot();
    checkCatShot();
    checkEnemyCrash();
    checkEatShroom();
    checkGameOver();
    myGameArea.score();
    myGameArea.lives();
    myGameArea.ammo();
  }
  
  function difficultySetting(){
    if (points >= 10 || myGameArea.frames > 90000){
      return 30;
    }
    else if (points >= 5 || myGameArea.frames > 45000){
      return 60;
    }
    else {
      return 90;
    }
  }
  
  
  function updateEnemy() {
      for (i = 0; i < myEnemy.length; i++) {
        if (myEnemy[i].x < 0){
          myEnemy.splice(i,1);
        }
        else if(myEnemy[i].x<=player.x+player.width+90 && myEnemy[i].x>player.x && myEnemy[i].y<=player.y+player.height+90 && myEnemy[i].y>player.y){
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
    if (myGameArea.frames % (difficultySetting()) === 0) {
      let x = myGameArea.canvas.width;
      let y = Math.floor(Math.random() * (myGameArea.canvas.height-20));
      myEnemy.push(new Component(20, 20, 'green', x, y, "/images/transparent wasp.png"));
    }
  }
  
  function updateCats(){
    for (i=0;i<myCats.length;i++){
      if (myCats[i].x < 0){
        myCats.splice(i,1);
      }
      else{
        myCats[i].x += -1;
      }
      myCats[i].update();
    }
  
    if (myGameArea.frames % 270 === 0 && myGameArea.frames > 1) {
     let x = myGameArea.canvas.width;
     let y = Math.floor(Math.random() * (myGameArea.canvas.height-40));
     myCats.push (new Component(40, 40, 'blue', x, y, "/images/Cat.png"));
      }
  }
  
  function updateBullets(){
    for (i=0; i<bullets.length; i++){
      if (bullets[i].x > myGameArea.canvas.width){
        bullets.splice(i,1);
      }
      else {
        bullets[i].x += 20;
      }
      bullets[i].update();
    }
  
    if (ammunition <= 0){
      if (reloadTime >= 300){
        ammunition = 6;
        reloadTime = 0;
        reloadSound.play();
      }
      else {
        reloadTime += 1;
      }
    }
  }
  
  
  function updateShrooms(){
    for (i=0;i<shrooms.length;i++){
      if (shrooms[i].time > 600){
        shrooms.splice(i,1);
        mushroomGrow.play();
      }
      else{
        shrooms[i].time += 1;
      }
      shrooms[i].update();
    }
  
    if (myGameArea.frames % 1200 === 0 && myGameArea.frames > 1) {
     let x = Math.floor(Math.random() * (myGameArea.canvas.width-30));
     let y = Math.floor(Math.random() * (myGameArea.canvas.height-30));
     shrooms.push (new Component(30, 30, 'blue', x, y, "/images/Mushroom.png"));
     mushroomGrow.play();
      }
  }
  
  function checkEatShroom(){
    for (i=0; i<shrooms.length;i++){
      if(player.crashWith(shrooms[i])){
        if (playerLives<3){
          eatMushroomSound.play();
          playerLives += 1
          moreLifeSound.play();
          awYeahSound.play();
        }
        shrooms.splice(i,1)
      }
    }
  }
  
  function checkPetCat (){
    for (i=0; i<myCats.length; i++){
      if (player.crashWith(myCats[i])){
        catMeow.play();
        points += 1;
        myCats.splice(i,1);
        if (points % 5 === 0 && points > 0){
          petCatSound.play();
        }
      }
    }
  }
  
  function checkEnemyCrash(){
    for (i=0; i<myEnemy.length; i++){
      if (player.crashWith(myEnemy[i])){
        playerLives -= 1;
        playerDamageSound.play();
        myEnemy.splice(i,1)
      }
    }
  }
  
  function checkEnemyShot(){
    for(i=0; i<bullets.length; i++){
      for (j=0; j<myEnemy.length; j++){
        if (bullets[i].crashWith(myEnemy[j])){
          deadWaspSound.play();
          myEnemy.splice(j,1);
          bullets.splice(i,1);
        }
      }
    }
  }
  
  function checkCatShot(){
    for(i=0; i<bullets.length; i++){
      for (j=0; j<myCats.length; j++){
        if (bullets[i].crashWith(myCats[j])){
          deadCatSound.play();
          myCats.splice(j,1);
          bullets.splice(i,1);
          points += -1;
          wtfSound.play();
        }
      }
    }
  }
  
  function checkGameOver() {
    if (playerLives <= 0){
      playerDeathSound.play();
      myGameArea.stop();
      backgroundMusic.stop();
      gameOverSound.play();
    }
  }