import * as P5 from 'p5';

type Vector2 = {
  x : number;
  y : number;
}

type RGB = {
  r : number;
  g : number;
  b : number;
}

export default function sketch(p5 : P5) {

  const CANVAS_SIZE = 600;
  let crr : Vector2[];
  let end : Vector2[];

  let fill : RGB = {
    r: 0,
    g: 0,
    b: 0,
  };
  // let stroke : RGB;

  function randRGB() : RGB {
    return {
      r: p5.random(0, 255),
      g: p5.random(0, 255),
      b: p5.random(0, 255),
    };
  }

  function randVector2() : Vector2 {
    return {
      x : parseInt(p5.random(0, CANVAS_SIZE).toFixed(0), 10),
      y : parseInt(p5.random(0, CANVAS_SIZE).toFixed(0), 10),
    }
  }

  function createPoints(size = 4) : Vector2[] {
    const arr : Vector2[] = [];
    for (let i = 0; i < size; i += 1) arr.push(randVector2());
    return arr;
  }

  function move() {
    let moved = false;
    for (let i = 0; i < 4; i += 1) {
      if (crr[i].x > end[i].x) {
        crr[i].x -= 1;
        moved = true;
      } else if (crr[i].x < end[i].x) {
        crr[i].x += 1;
        moved = true;
      }

      if (crr[i].y > end[i].y) {
        crr[i].y -= 1;
        moved = true;
      } else if (crr[i].y < end[i].y) {
        crr[i].y += 1;
        moved = true;
      }
    }

    if (!moved) {
      end = createPoints();
      fill = randRGB();
    }
  }

  // função de setup
  function setup() {
    p5.createCanvas(CANVAS_SIZE, CANVAS_SIZE);
    p5.background(0);

    crr = createPoints();
    end = createPoints();

    fill = randRGB();
  }

  // função de desenhar
  function draw() {
    // p5.background(0);
    // let p = end;

    // p5.fill(30);
    // p5.quad(p[0].x, p[0].y,
    //   p[1].x, p[1].y,
    //   p[2].x, p[2].y,
    //   p[3].x, p[3].y);

    const p = crr;

    p5.fill(fill.r, fill.g, fill.b);
    // p5.stroke(fill.r, fill.g, fill.b);
    p5.quad(p[0].x, p[0].y,
      p[1].x, p[1].y,
      p[2].x, p[2].y,
      p[3].x, p[3].y);

    move();
  }

  // atribuindo tudo ao P5
  p5.setup = setup;
  p5.draw = draw;
}
