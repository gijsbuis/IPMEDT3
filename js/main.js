window.onload = () => {
  const camera = document.getElementById('js--camera');
  const places = document.getElementsByClassName('js--place');
  const bomb = document.getElementById('js--bomb');


  for (let i = 0; i < places.length; i++) {
    places[i].addEventListener('click', function(event) {
      let att = document.createAttribute('animation');
      att.value = "property: position; easing: linear; dur: 2000; to: " + this.getAttribute('position').x + " 1.6 " + this.getAttribute('position').z;
      camera.setAttribute('animation', att.value);
    });
  }

  bomb.addEventListener('click', function(event) {
    console.log("BOOOOMMMM");
    this.remove();
  })
}
window.onload = () =>{
  const places = document.getElementsByClassName('js--place');
  const camera = document.getElementById('js--camera');

  let pickups = document.getElementsByClassName('js--pickup');
  let hold = null;
  let box1 = document.getElementById("js--hold1");
  let box2 = document.getElementById("js--hold2");
  let box3 = document.getElementById("js--hold3");
  let box4 = document.getElementById("js--hold4");
  let box5 = document.getElementById("js--hold5");
  

  const placeholders = document.getElementsByClassName('js--placeholder');
  let scene = document.getElementById('js--scene');
  let papier = document.getElementById('js--papier');
  
  function addListeners() {
    for (let i = 0; i < pickups.length; i++) {
      pickups[i].addEventListener('click', function(evt){
        if (hold == null) {
          this.setAttribute("animation", "property: position; to: -0.5 1.5 -3; loop: false; dur: 2000");
          
          if (this.id == "js--hold1"){
            setTimeout(function(){papier.setAttribute("src", "#PapierRoze");},2000)
            setTimeout(function(){box1.setAttribute("animation", "property: rotation; to: 90 45 0; loop: false; dur: 300");},2000)
            setTimeout(function(){box1.setAttribute("animation", "property: rotation; to: 0 0 0; loop: false; dur: 300");},3000)
            setTimeout(function(){box1.setAttribute("animation", "property: position; to: 0.8 1.25 1.2; loop: false; dur: 3000");},4000)
          } 
          if (this.id == "js--hold2"){
            setTimeout(function(){papier.setAttribute("src", "#PapierRood");},2000)
            setTimeout(function(){box2.setAttribute("animation", "property: rotation; to: 90 45 0; loop: false; dur: 300");},2000)
            setTimeout(function(){box2.setAttribute("animation", "property: rotation; to: 0 0 0; loop: false; dur: 300");},3000)
            setTimeout(function(){box2.setAttribute("animation", "property: position; to: 0.8 1.25 1.6; loop: false; dur: 3000");},4000)
          }
          if (this.id == "js--hold3"){
            setTimeout(function(){papier.setAttribute("src", "#PapierGroen");},2000)
            setTimeout(function(){box3.setAttribute("animation", "property: rotation; to: 90 45 0; loop: false; dur: 300");},2000)
            setTimeout(function(){box3.setAttribute("animation", "property: rotation; to: 0 0 0; loop: false; dur: 300");},3000)
            setTimeout(function(){box3.setAttribute("animation", "property: position; to: 0.8 1.25 2; loop: false; dur: 3000");},4000)
          } 
          if (this.id == "js--hold4"){
            setTimeout(function(){papier.setAttribute("src", "#PapierBlauw");},2000)
            setTimeout(function(){box4.setAttribute("animation", "property: rotation; to: 90 45 0; loop: false; dur: 300");},2000)
            setTimeout(function(){box4.setAttribute("animation", "property: rotation; to: 0 0 0; loop: false; dur: 300");},3000)
            setTimeout(function(){box4.setAttribute("animation", "property: position; to: 0.8 1.25 0.4; loop: false; dur: 3000");},4000)
          } 
          if (this.id == "js--hold5"){
            setTimeout(function(){papier.setAttribute("src", "#PapierPaars");},2000)
            setTimeout(function(){box5.setAttribute("animation", "property: rotation; to: 90 45 0; loop: false; dur: 300");},2000)
            setTimeout(function(){box5.setAttribute("animation", "property: rotation; to: 0 0 0; loop: false; dur: 300");},3000)
            setTimeout(function(){box5.setAttribute("animation", "property: position; to: 0.8 1.25 0.8; loop: false; dur: 3000");},4000)
          } 
        }
      });
    }
  }
  addListeners();
}
