window.onload = () => {
   
  //const canvas = document.querySelector("#myCanvas")
 

  document.getElementById('start').onclick = () => {
     const intro = document.getElementById('intro')
      intro.remove();
      startGame();
      //caja.classList.add('hidden')
      console.log('hola');
  }
}
