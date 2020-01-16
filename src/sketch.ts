import * as P5 from 'p5';

export default function sketch(p5 : P5) {

  const size = 300;

  const sum = 1;

  const canvasSize = 600;
  const canvasCenter = canvasSize / 2;

  const formsSize : number[] = [];

  function createForm() {
    formsSize.push(0);
  }

  // função de setup
  function setup() {
    p5.createCanvas(canvasSize, canvasSize);
    p5.background(255);
    createForm();
  }

  // função de desenhar
  function draw() {
    p5.background(255);
    for (let i = 0; i < formsSize.length; i += 1) {
      p5.ellipse(canvasCenter, canvasCenter, formsSize[i], formsSize[i]);
      formsSize[i] += sum;
    }

    if (formsSize[formsSize.length - 1] === size) {
      createForm();
    }

  }

  // atribuindo tudo ao P5
  p5.setup = setup;
  p5.draw = draw;
}
