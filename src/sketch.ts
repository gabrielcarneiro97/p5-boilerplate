import * as P5 from 'p5';

export default function sketch(p5 : P5) {

  // função de setup
  function setup() {
    p5.createCanvas(300, 300);
    p5.background(0);
  }

  // função de desenhar
  function draw() {}

  // atribuindo tudo ao P5
  p5.setup = setup;
  p5.draw = draw;
}
