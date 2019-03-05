import "./styles.css";

import createREGL from "regl";

// console.log(regl);
const regl = createREGL();

regl.frame(() => {
  regl.clear({
    color: [1, 0, 1, 1]
  });
});
