import "./styles.css";
import createREGL from "regl";

const regl = createREGL();

const drawTriangle = regl({
  vert: `
    precision mediump float;
    attribute vec2 position;
    attribute vec3 color;
    varying vec3 fcolor;
    void main() {
      fcolor = color;
      gl_Position = vec4(position, 0, 1);
    }
  `,
  frag: `
    precision mediump float;
    varying vec3 fcolor;
    void main() {
      gl_FragColor = vec4(fcolor, 1);
    }
  `,
  attributes: {
    position: [[1, 0], [0, 1], [-1, -1]],
    color: [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
  },

  count: 3
});

regl.frame(() => {
  regl.clear({
    color: [0, 0, 0, 1],
    depth: 1
  });

  drawTriangle();
});
