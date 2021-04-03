import React, { Children } from "react";
import "./btn.css";

const Btn = (props) => {
  const { children, onClick };
  return <button onClick={onClick}>{Children}</button>;
};

export default Btn;
