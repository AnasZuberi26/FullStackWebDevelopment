// import React from "react";
// import Component1 from "./Component1";

// const Button = (props) => {
//   return (
//     <div>
//       <button>
//         <span>
//           <Component1 count={props.count} />
//         </span>{" "}
//         I am a button
//       </button>
//     </div>
//   );
// };

// export default Button;


import React from "react";
import Component1 from "./Component1";
import { useContext } from "react";
import { counterContext } from "../context/context";

const Button = () => {
  const counter = useContext(counterContext)
  return (
    <div>
      <button onClick={() => counter.setCount((count) => count + 1)}>
        <span>
          <Component1 />
        </span>{" "}
        I am a button
      </button>
    </div>
  );
};

export default Button;
