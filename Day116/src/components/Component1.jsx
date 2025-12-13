// import React from "react";

// const Component1 = ({ count }) => {
//   return <div>{count}</div>;
// };

// export default Component1;

import React from "react";
import { useContext } from "react";
import { counterContext } from "../context/context";

const Component1 = () => {
  const counter = useContext(counterContext);
  return <div>{counter.count}</div>;
};

export default Component1;
