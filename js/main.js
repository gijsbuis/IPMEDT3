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







  // Choose element //
    const elements = document.getElementsByClassName("js--element");

    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", function(evt){

        let elementPos = elements[i].getAttribute("position");
        elementPos.y = -2;

        console.log(elementPos);
        console.log("XD");

        let elementColor = elements[i].getAttribute("color");
        counter(elementColor);
        main();

        elements[i].setAttribute("position","-1.35 1.35 0.32");
        elements[i].setAttribute("animation","property: rotation; to: 150 0 0; dur: 2000; easing: linear; loop: false");
        setTimeout(function(){
          elements[i].setAttribute("position","-1.35 -1.35 0.32");
          elements[i].setAttribute("animation","property: rotation; to: 0 0 0; dur: 10; easing: linear; loop: false");
         }, 3000);


      });
    }

  // Counter //
    let countCorrect = 0;
    let totalTries = 0;

    function counter(elementColor){
      if(elementColor == "red" || elementColor == "green" || elementColor == "pink"){
        countCorrect++;
        totalTries++;
      }
      else{
        totalTries++;
      }
    }

  // Main //
    const doorRight = document.getElementsByClassName("js--doorRight");
    const doorLeft = document.getElementsByClassName("js--doorLeft");

    function main(){
      if(countCorrect == 3 && totalTries == 3){
        doorRight[0].setAttribute("animation","property: rotation; to: 0 45 0; dur: 2000; easing: linear; loop: false");
        doorLeft[0].setAttribute("animation","property: rotation; to: 0 -45 0; dur: 2000; easing: linear; loop: false");
      }
      else if(totalTries == 3){
        resetElements();
      }
    }

  // Reset elements //
    function resetElements(){
      for (let i = 0; i < elements.length; i++) {
        countCorrect = 0;
        totalTries = 0;

        let elementPos = elements[i].getAttribute("position");
        elementPos.y = 0.35;
        elements[i].setAttribute("position",elementPos);
      }
    }

  // Reset button //
      const reset = document.getElementsByClassName("js--reset");

      for (let i = 0; i < reset.length; i++) {
        reset[i].addEventListener("click", function(evt){
          resetElements();
        });
      }


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
  for (let i = 0; i < placeholders.length; i++) {
    placeholders[i].addEventListener('click', function(evt){
      if (hold == "box"){
        let box = document.createElement('a-box');
        box.setAttribute("class", "js--pickup js--interact");
        box.setAttribute("color", "green");
        box.setAttribute("position", {x: this.getAttribute('position').x, y:"0.5", z: this.getAttribute('position').z});
        scene.appendChild(box);
        document.getElementById("js--hold").remove();
        addListeners();
        hold = null;
      }
    });
}
}