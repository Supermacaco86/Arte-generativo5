let luz = true;
let col = 'azul';

function setup() {
  createCanvas(400, 400);
}

function draw() {
if(mouseX < width / 2){
  col = 'azul';
}else{
  col = 'rojo';
}

  if(luz && col == 'rojo'){
    background(255, 0, 0);
  }else if(luz && col == 'azul'){
    background(0, 0, 255);
  }else{
    background(0);
  }
}

function mouseClicked() {
  luz = !luz;
}
