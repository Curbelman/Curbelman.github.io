window.onload = () => {
   
  //const canvas = document.querySelector("#myCanvas")
  const intro = document.querySelector('.intro')

  document.getElementById('start').onclick = () => {
      intro.style.display="none";
      //caja.classList.add('hidden')
      startGame();
  }
}