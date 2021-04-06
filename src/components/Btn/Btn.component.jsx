import React, { Children } from "react";
import "./btn.css";

const Btn = (props) => {
  const { btnTxt, onClick } = props;
  return (
    <button className="btn" onClick={onClick}>
      {btnTxt}
    </button>
  );
};

export default Btn;
