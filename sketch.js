function setup() {
  createCanvas(windowWidth, windowHeight);
  lockGestures();
  enableGyroTap('Tap to see my journey');
}

function draw() {
  background(245);
  textAlign(width/2, height/2);

  if (window.sensorsEnabled) {
    text('Loading...', width/2, height/2);
  } else {
    text('Tap to see my journey', width / 2, height / 2);
  }
}