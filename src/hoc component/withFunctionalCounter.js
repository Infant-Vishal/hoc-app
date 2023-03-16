import React, { useState } from "react";

const withFunctionalCounter = (WrappedComponent, payload) => {
  const HOC = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + payload);
    };
    return <WrappedComponent count={count} increment={increment} {...props} />;
  };
  return HOC;
};

export default withFunctionalCounter;
