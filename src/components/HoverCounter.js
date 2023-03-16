import React from "react";
import withCounter from "../hoc component/withCounter";
import withFunctionalCounter from "../hoc component/withFunctionalCounter";

const HoverCounter = ({ count, increment, name }) => {
  return <h1 onMouseOver={increment}>{name} Hovering {count} times</h1>;
};

//  export default withCounter(HoverCounter);
export default withFunctionalCounter(HoverCounter, 10);
