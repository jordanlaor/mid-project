import React from "react";

const SpecialRoute = (props) => {
  const { condition, children } = props;
  console.log(children);
  return <>{condition ? children[0] : children[1]}</>;
};

export default SpecialRoute;
