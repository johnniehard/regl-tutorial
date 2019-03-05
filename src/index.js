import "./styles.css";

import createREGL from "regl";

// console.log(regl);
const regl = createREGL();

regl.frame(() => {
  regl.clear({
    color: [1, 0.5 * (1.0 + Math.cos(Date.now() * 0.01)), 1, 1]
  });
});
