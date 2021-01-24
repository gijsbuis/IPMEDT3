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
