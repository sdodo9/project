let bar;
let banner;
let product;
let GNB;
let icon;
let gbox;
let sbox;

let state = 0;

function preload() {
  bar = loadImage('01_NavBar.png');
  banner = loadImage('02_AdBanner.png');
  product = loadImage('03_Product.png');
  GNB = loadImage('04_GNB.png');
  icon = loadImage('05_ai_icon.png');
  gbox = loadImage('06_green.png');
  sbox = loadImage('07_textbox.png');
}
function setup() {
  createCanvas(393, 852);
}
function mouseClicked() {
  if(mouseX>=320&&mouseX<=380){
    if(mouseY >= 688 && mouseY <= 748){
      if(state ==0){
        state=1;
      }else if(state ==1 ){
        state=0;
      }
    }
  }
}

function draw() {
  background(255);
  if(state==0){
  image(bar,0,0,393,128);
  image(banner,0,128,393,284);
  image(product,0,412,393,440);
  image(GNB,0,748,393,88);
  image(icon,320,688,60,60);
  } else if(state==1){
  image(bar,0,0,393,128);
  image(banner,0,128,393,284);
  image(product,0,412,393,440);
  image(gbox,0,612,393,152);
  image(GNB,0,748,393,88);
  image(icon,320,688,60,60);
  }
  
}