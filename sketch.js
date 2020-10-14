const colorList1 = ["#75DDDD", "#84C7D0",
                   "#9297C4", "#9368B7"];

const colorList2 = ["#26547C", "#EF476F",
                    "#FFD166", "#06D6A0"];

const colorList3 = ["#7BC950", "#7CE577",
                    "#9CFFD9", "#B6EFD4"];

const colorList4 = ["#A63A50", "#F0E7D8",
                    "#AB9B96", "#A1674A"];

const a = 10;


let fr = 10;

let testo = 'Use keys 1-2-3-4 to change the palette';


function preload(){

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  frameRate(fr);

  function mousePressed() {
  fr = fr / 2;
}



  frameRate(fr);

  }


function draw() {

    for (let x = 0; x < windowWidth; x += a) {
    for (let y = 0; y < windowHeight; y += a) {

     noStroke();

     if (key == '1') {
     fill(color(random(colorList1)))
  }
     else if (key == '2') {
       fill(color(random(colorList2)))
     }

     else if (key == '3') {
       fill(color(random(colorList3)))
     }
     else if (key == '4') {
       fill(color(random(colorList4)))
     }

     rect(x,y,100,100);
}
}

  push()
  textSize(50);

  if (key == '1') {
  fill(color(random(colorList1)))
}
  else if (key == '2') {
    fill(color(random(colorList2)))
  }

  else if (key == '3') {
    fill(color(random(colorList3)))
  }
  else if (key == '4') {
    fill(color(random(colorList4)))
  }
  textAlign(CENTER);
  textFont('helvetica');
  text(testo, windowWidth / 2, windowHeight / 2 -100);
  pop();





}
