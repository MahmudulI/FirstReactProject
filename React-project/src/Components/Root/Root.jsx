import React from "react";
import "./Root.css";
import Practice from "../Practice/Practice";
const Root = () => {
  let information = [
    { name: "Mahmudul", age: "18" },
    { name: "Islam", age: "36" },
    {name:"Apon",age:"21"}
  ];

  return (
    <div>
      {/* <h1> I am form Root.jsx file</h1> */}
      {information.map((information) => (
        <Practice information={information}></Practice>
      ))}
    </div>
  );
};

export default Root;
