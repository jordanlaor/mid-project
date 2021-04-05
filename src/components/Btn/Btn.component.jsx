import React, { Children } from "react";
import "./btn.css";

const Btn = (props) => {
  const { children, onClick } = props;
  return <button onClick={onClick}>{Children}</button>;
};

export default Btn;
