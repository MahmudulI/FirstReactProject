import React, { useEffect, useState } from "react";
import "./Practice.css";

const Practice = (props) => {
  let [count, setcount] = useState(0);
  useEffect(() => {
    console.log("Clicked");
  }, [count]);
  const Increase = () => {
    setcount(count + 1);
  };

  const Decrease = () => {
    setcount(count - 1);
  };

  return (
    <div>
      <h1>Name : {props.information.name} </h1>
      <h1> Age: {props.information.age} </h1>
      <h1> Count : {count} </h1>
      <button className="btn" onClick={Increase}>
        Increase
      </button>
      <button className="btn" onClick={Decrease}>
        Decrease
      </button>
    </div>
  );
};

export default Practice;
