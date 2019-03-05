import "./styles.css";
import createREGL from "regl";

const regl = createREGL();

const drawTriangle = regl({
  vert: `
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0, 1);
    }
  `,
  frag: `
    void main() {
      gl_FragColor = vec4(1, 1, 1, 1);
    }
  `,
  attributes: {
    position: [[1, 0], [0, 1], [-1, -1]]
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
