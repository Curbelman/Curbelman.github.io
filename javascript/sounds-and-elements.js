function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }
  
  const myEnemy = [];
  
  const myCats = [];
  
  const shrooms = [];
  
  const bullets = [];
  
  let playerLives = 3;
  
  let points = 0;
  
  let ammunition = 6;
  
  let reloadTime = 0;
  
  const backgroundMusic = new sound("/sounds/Calm of the woodlands.ogg");
  
  const playerDamageSound = new sound ("/sounds/male_hurt7-48124.mp3");
  
  const shootSound = new sound ("/sounds/shoot-2-81137.mp3");
  
  const deadWaspSound = new sound ("/sounds/wings-of-insects-45540.mp3");
  
  const deadCatSound = new sound("/sounds/mixkit-creature-cry-of-hurt-2208.wav");
  
  const wtfSound = new sound("/sounds/what-a-fuck-120320.mp3");
  
  const eatMushroomSound = new sound ("/sounds/flower-chomp-46431.mp3");
  
  const noBulletsShotSound = new sound ("/sounds/click-click-1-95683.mp3");
  
  const awYeahSound = new sound("/sounds/aw-yeah-95899.mp3");
  
  const mushroomGrow = new sound ("/sounds/014_plantacreciendo-003-44289.mp3");
  
  const gameOverSound = new sound("/sounds/game-over-arcade-6435.mp3");
  
  const reloadSound = new sound ("/sounds/clip-in-106657.mp3");
  
  const catMeow = new sound ("/sounds/cat-call-meow-102607.mp3");
  
  const petCatSound = new sound("/sounds/yeah-boy-114748.mp3");
  
  const playerDeathSound = new sound ("/sounds/death-49098.mp3");
  
  const moreLifeSound = new sound("/sounds/power_up_grab-88510.mp3");
  