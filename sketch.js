let rotationX = 0;
let rotationY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
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

  //rotationX
  rotateX(radians(rotationX));     // Rotate around X-axis
  normalMaterial();                // Apply simple shaded material
  box(60);                         // Draw 3D cube (60 units wide)
  rotationX = (rotationX + 5) % 360; // Increment rotation (2° per frame)
  //rotationY
  rotateY(radians(rotationY));     // Rotate around Y-axis (vertical)
  normalMaterial();                // Apply simple shaded material
  box(60);                         // Draw 3D cube (60 units wide)
  rotationY = (rotationY + 5) % 360; // Increment rotation (2° per frame)
}