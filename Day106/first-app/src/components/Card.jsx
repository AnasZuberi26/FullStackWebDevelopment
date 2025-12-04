import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card" style={{overflow: "hidden"}}>
      <img
        src="https://www.21kschool.com/in/wp-content/uploads/sites/4/2023/11/15-Facts-About-Coding-Every-Kid-Should-Know.png"
        alt="" width="240" height={210} style={{border: "2px solid black"}}
      />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
