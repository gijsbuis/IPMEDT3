window.onload = () => {
  const camera = document.getElementById('js--camera');
  const places = document.getElementsByClassName('js--place');
  const bomb = document.getElementById('js--bomb');
  const scene = document.getElementById("js--scene");
  const placeholders = document.getElementsByClassName('js--placeholder');
  const doosjeBovenkant = document.getElementById('js--rotateBoxTop');
  const triangleKeyBox = document.getElementById('js--keyBox');
  const triangleKeyBoxLock = document.getElementsByClassName('js--triangleKeyBoxLock');
  const puzzleOneLeftNumberUp = document.getElementById('js--puzzleOneLeftNumberUp');
  const puzzleOneLeftNumberDown = document.getElementById('js--puzzleOneLeftNumberDown');
  const puzzleOneMiddleNumberUp = document.getElementById('js--puzzleOneMiddleNumberUp');
  const puzzleOneMiddleNumberDown = document.getElementById('js--puzzleOneMiddleNumberDown');
  const puzzleOneRightNumberUp = document.getElementById('js--puzzleOneRightNumberUp');
  const puzzleOneRightNumberDown = document.getElementById('js--puzzleOneRightNumberDown');
  const puzzleOnePlanes = document.getElementsByClassName('js--puzzleOnePlane');
  const puzzleOneTriangles = document.getElementsByClassName('js--puzzleOneTriangle');
  const puzzleOneHints = document.getElementsByClassName('js--puzzleOneHint');

  let puzzleOneLeftNumber = 0;
  let puzzleOneMiddleNumber = 0;
  let puzzleOneRightNumber = 0;
  let puzzleOneValueOne = document.getElementById('js--puzzle1--valueOne');
  let puzzleOneValueTwo = document.getElementById('js--puzzle1--valueTwo');
  let puzzleOneValueThree = document.getElementById('js--puzzle1--valueThree');
  let pickups = document.getElementsByClassName('js--pickup');
  let hold = null;
  let box1 = document.getElementById("js--hold1");
  let box2 = document.getElementById("js--hold2");
  let box3 = document.getElementById("js--hold3");
  let box4 = document.getElementById("js--hold4");
  let box5 = document.getElementById("js--hold5");
  let antwoordText = document.getElementById("antwoordText");
  let papier = document.getElementById('js--papier');

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

  const bekerCarry = document.getElementById("js--bekerCarry");


  // Choose element //
    const elements = document.getElementsByClassName("js--element");

    const element1Pos = "-0.5 0.35 0.2";
    const element2Pos = "0 0.35 0";
    const element3Pos = "0.5 0.35 0.12";
    const element4Pos = "1 0.35 -0.1";
    const element5Pos = "1.15 0.35 0.35";

    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", function(evt){

        elements[i].setAttribute("position","-0.75 1.0 0.32");
        elements[i].setAttribute("rotation","0 45 90");
        elements[i].setAttribute("animation","property: rotation; to: 0 45 125; dur: 1500; easing: linear; loop: false");
        setTimeout(function(){
          elements[i].setAttribute("position","0 -2 0");
          elements[i].setAttribute("animation","property: rotation; to: 0 0 0; dur: 10; easing: linear; loop: false");
        }, 1600);

        let elementColor = elements[i].getAttribute("color");
        counter(elementColor);
        main();
      });
    }

  // Counter //
    let countCorrect = 0;
    let totalTries = 0;

    function counter(elementColor){
      if(elementColor == "red" || elementColor == "green" || elementColor == "pink"){
        countCorrect++;
        totalTries++;
        fillCup();
      }
      else{
        totalTries++;
        fillCup();
      }
    }

  // Fill //
    const fill = document.getElementsByClassName("js--fill");
    const colorArray = ["green","red","blue"];
    let fillLevel = 0;

    function fillCup(){
      fill[fillLevel].setAttribute("opacity","1");
      fill[fillLevel+1].setAttribute("opacity","1");
      for (let i = 0; i < fill.length; i++) {
        fill[i].setAttribute("color",colorArray[fillLevel]);
      }
      fillLevel++;
    }

  // Main //
    const doorRight = document.getElementsByClassName("js--doorRight");
    const doorLeft = document.getElementsByClassName("js--doorLeft");
    const beker = document.getElementsByClassName("js--beker");
    let puzzleComplete = false;

    function main(){
      if(countCorrect == 3 && totalTries == 3){
        setTimeout(function(){
          for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("js--interact");
          }
          puzzleComplete = true;
        }, 1600);
      }
      else if(totalTries == 3){
        setTimeout(function(){
          resetElements();
        }, 1600);
      }
    }

  // Correct element //
    let bekerBoolean = false;

    for (let i = 0; i < beker.length; i++) {
      beker[i].addEventListener("click", function(evt){
        if(puzzleComplete == true){
          beker[i].setAttribute("position","0 5 0");
          // console.log(bekerCarry);
          // camera.innerHTML += bekerCarry;
          // console.log(camera);
          bekerBoolean = true;
        } else{
          console.log("neej");
        }
      });
    }

  // Melt lock //
    const slot = document.getElementsByClassName("js--slot");
    const bekerSlot = document.getElementsByClassName("js--bekerSlot");

    for (let i = 0; i < slot.length; i++) {
      slot[i].addEventListener("click", function(evt){
        if(bekerBoolean == true){
          bekerSlot[0].setAttribute("position","0 1.65 2.54");
          bekerSlot[0].setAttribute("rotation","0 -145 90");
          bekerSlot[0].setAttribute("animation","property: rotation; to: 0 -145 125; dur: 1500; easing: linear; loop: false");
          for (let i = 0; i < slot.length; i++) {
            slot[i].setAttribute("animation","property: opacity; to: 0; dur: 1500; easing: linear; loop: false");
          }
          setTimeout(function(){
            bekerSlot[0].setAttribute("position","0 -2 2.34");
            slot[i].setAttribute("scale","0.01 0.01 0.01");
            doorRight[0].setAttribute("animation","property: rotation; to: 0 40 0; dur: 2000; easing: linear; loop: false");
            doorLeft[0].setAttribute("animation","property: rotation; to: 0 -40 0; dur: 2000; easing: linear; loop: false");
          }, 1600);
        } else{
          console.log("nee");
        }
      });
    }

  // Reset elements //
    function resetElements(){
        countCorrect = 0;
        totalTries = 0;
        fillLevel = 0;

        for (let i = 0; i < fill.length; i++) {
          fill[i].setAttribute("opacity","0");
        }

        elements[0].setAttribute("position", element1Pos);
        elements[1].setAttribute("position", element2Pos);
        elements[2].setAttribute("position", element3Pos);
        elements[3].setAttribute("position", element4Pos);
        elements[4].setAttribute("position", element5Pos);
    }










    function addListeners() {
      let tracker = 0;
      for (let i = 0; i < pickups.length; i++) {
        pickups[i].addEventListener('click', function(evt){
          if (hold == null) {
            this.setAttribute("animation", "property: position; to: -0.5 1.5 -3; loop: false; dur: 2000");

            if (this.id == "js--hold1"){
              setTimeout(function(){papier.setAttribute("src", "#PapierRoze");},2000)
              setTimeout(function(){box1.setAttribute("animation", "property: rotation; to: 90 45 0; loop: false; dur: 300");},2000)
              setTimeout(function(){box1.setAttribute("animation", "property: rotation; to: 0 0 0; loop: false; dur: 300");},3000)
              setTimeout(function(){box1.setAttribute("animation", "property: position; to: 0.8 1.25 1.2; loop: false; dur: 3000");},4000)
              tracker = 1;
              gameLogica(tracker);
            }
            if (this.id == "js--hold2"){
              setTimeout(function(){papier.setAttribute("src", "#PapierRood");},2000)
              setTimeout(function(){box2.setAttribute("animation", "property: rotation; to: 90 45 0; loop: false; dur: 300");},2000)
              setTimeout(function(){box2.setAttribute("animation", "property: rotation; to: 0 0 0; loop: false; dur: 300");},3000)
              setTimeout(function(){box2.setAttribute("animation", "property: position; to: 0.8 1.25 1.6; loop: false; dur: 3000");},4000)
              tracker = 4;
              gameLogica(tracker);
            }
            if (this.id == "js--hold3"){
              setTimeout(function(){papier.setAttribute("src", "#PapierGroen");},2000)
              setTimeout(function(){box3.setAttribute("animation", "property: rotation; to: 90 45 0; loop: false; dur: 300");},2000)
              setTimeout(function(){box3.setAttribute("animation", "property: rotation; to: 0 0 0; loop: false; dur: 300");},3000)
              setTimeout(function(){box3.setAttribute("animation", "property: position; to: 0.8 1.25 2; loop: false; dur: 3000");},4000)
              tracker = 2;
              gameLogica(tracker);
            }
            if (this.id == "js--hold4"){
              setTimeout(function(){papier.setAttribute("src", "#PapierBlauw");},2000)
              setTimeout(function(){box4.setAttribute("animation", "property: rotation; to: 90 45 0; loop: false; dur: 300");},2000)
              setTimeout(function(){box4.setAttribute("animation", "property: rotation; to: 0 0 0; loop: false; dur: 300");},3000)
              setTimeout(function(){box4.setAttribute("animation", "property: position; to: 0.8 1.25 0.4; loop: false; dur: 3000");},4000)
              tracker = 6;
              gameLogica(tracker);
            }
            if (this.id == "js--hold5"){
              setTimeout(function(){papier.setAttribute("src", "#PapierPaars");},2000)
              setTimeout(function(){box5.setAttribute("animation", "property: rotation; to: 90 45 0; loop: false; dur: 300");},2000)
              setTimeout(function(){box5.setAttribute("animation", "property: rotation; to: 0 0 0; loop: false; dur: 300");},3000)
              setTimeout(function(){box5.setAttribute("animation", "property: position; to: 0.8 1.25 0.8; loop: false; dur: 3000");},4000)
              tracker = 8;
              gameLogica(tracker);
            }
          }
        });
      }
    }
    addListeners();

    let RfWaardes = ["1.5","1","3","0.75","6"];
    let randomNum = Math.floor(Math.random() * Math.floor(5));
    let ditAntwoord = RfWaardes[randomNum];
    console.log(ditAntwoord);
    antwoordText.setAttribute("value", "Je bent op zoek naar een vloeistof met een 'Rf' waarde van " + ditAntwoord)


    function gameLogica(tracker){
      // instructietext
    let Rf = 6 / tracker;
    console.log(Rf);
    if(Rf == ditAntwoord){
      let vloeistof = document.getElementById("js--vloeistof");
      let cubeSleutel = document.getElementById("js--cubeSleutel");
      setTimeout(function(){cubeSleutel.setAttribute("animation", "property: position; to: 0 0.3 0; loop: false; dur: 1500")},4000);
      setTimeout(function(){vloeistof.setAttribute("animation", "property: height; to: 0.5; loop: false; dur: 1000")},3000);
      console.log("cheers");
    } else {
      console.log("bot");
    }
    }

    // Attach to looking at the first keylock on the bomb
    puzzleOneHintAppear();

    function puzzleOneHintAppear() {
      for (var i = 0; i < puzzleOneHints.length; i++) {
        puzzleOneHints[i].setAttribute('opacity', '1');
      }
    }

    puzzleOneLeftNumberUp.addEventListener('click', function(event) {
      if (puzzleOneLeftNumber === 9) {
        puzzleOneLeftNumber = 0;
      } else {
        puzzleOneLeftNumber += 1;
      }
      puzzleOneValueOne.setAttribute('value', puzzleOneLeftNumber);
      updatePuzzleOne();
    });

    puzzleOneLeftNumberDown.addEventListener('click', function(event) {
      if (puzzleOneLeftNumber === 0) {
        puzzleOneLeftNumber = 9;
      } else {
        puzzleOneLeftNumber -= 1;
      }
      puzzleOneValueOne.setAttribute('value', puzzleOneLeftNumber);
      updatePuzzleOne();
    });

    puzzleOneMiddleNumberUp.addEventListener('click', function(event) {
      if (puzzleOneMiddleNumber === 9) {
        puzzleOneMiddleNumber = 0;
      } else {
        puzzleOneMiddleNumber += 1;
      }
      puzzleOneValueTwo.setAttribute('value', puzzleOneMiddleNumber);
      updatePuzzleOne();
    });

    puzzleOneMiddleNumberDown.addEventListener('click', function(event) {
      if (puzzleOneMiddleNumber === 0) {
        puzzleOneMiddleNumber = 9;
      } else {
        puzzleOneMiddleNumber -= 1;
      }
      puzzleOneValueTwo.setAttribute('value', puzzleOneMiddleNumber);
      updatePuzzleOne();
    });

    puzzleOneRightNumberUp.addEventListener('click', function(event) {
      if (puzzleOneRightNumber === 9) {
        puzzleOneRightNumber = 0;
      } else {
        puzzleOneRightNumber += 1;
      }
      puzzleOneValueThree.setAttribute('value', puzzleOneRightNumber);
      updatePuzzleOne();
    });

    puzzleOneRightNumberDown.addEventListener('click', function(event) {
      if (puzzleOneRightNumber === 0) {
        puzzleOneRightNumber = 9;
      } else {
        puzzleOneRightNumber -= 1;
      }
      puzzleOneValueThree.setAttribute('value', puzzleOneRightNumber);
      updatePuzzleOne();
    });

    function updatePuzzleOne() {
      if (puzzleOneLeftNumber === 9 && puzzleOneMiddleNumber === 9 && puzzleOneRightNumber === 1) {
        openTriangleKeyBox();
        for (var i = 0; i < puzzleOnePlanes.length; i++) {
          puzzleOnePlanes[i].setAttribute('color', 'green');
        }
        // In the second for loop i needs to stay at 0 because the array of HTML Elements
        // changes after every removal, which means first it's 0-5, then 0-4, 0-3
        // meaning if I use i++ it will remove only half of the array
        for (var i = 0; i < puzzleOneTriangles.length; i) {
          puzzleOneTriangles[i].remove();
        }
      }
    }

    function openTriangleKeyBox() {
      for (var i = 0; i < triangleKeyBoxLock.length; i++) {
        triangleKeyBoxLock[i].setAttribute("animation","property: opacity; to: 0.0; dur: 2000; easeing: linear; loop: false;");
      }
      setTimeout(function () {
        doosjeBovenkant.setAttribute("animation","property: rotation; to: -30 0 0; dur: 2000; easing: linear; loop: false");
        setTimeout(function () {
          triangleKeyBox.setAttribute("animation", "property: rotation; to: 30 45 0; dur:2000; easing: linear; loop: false")
        }, 2000);
      }, 2000);
    }
}
