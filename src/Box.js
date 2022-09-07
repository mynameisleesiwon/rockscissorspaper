import React from "react";

const Box = ({ title, item, result }) => {
  // Computer이고 비기지 않고 결과값이 존재 하면
  if (title === "Computer" && result !== "draw" && result !== "") {
    result = result === "win" ? "lose" : "win";
  }
  return (
    <div className={`box ${result}`}>
      <h1>{title}</h1>
      <h2>{item && item.name}</h2>
      <img className="item-img" src={item && item.img} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
