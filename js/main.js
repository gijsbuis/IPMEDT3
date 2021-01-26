window.onload = () => {
  const camera = document.getElementById('js--camera');
  const places = document.getElementsByClassName('js--place');
  const bomb = document.getElementById('js--bomb');
  const doosjeBovenkant = document.getElementById('js--rotateBoxTop');

  for (let i = 0; i < places.length; i++) {
    places[i].addEventListener('click', function(event) {
      let att = document.createAttribute('animation');
      att.value = "property: position; easing: linear; dur: 2000; to: " + this.getAttribute('position').x + " 1.6 " + this.getAttribute('position').z;
      camera.setAttribute('animation', att.value);
    });
  }

  bomb.addEventListener('click', function(event) {
    console.log("BOOOOMMMM");
    doosjeBovenkant.setAttribute("animation","property: rotation; to: -30 0 0; dur: 2000; easing: linear; loop: false");
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
