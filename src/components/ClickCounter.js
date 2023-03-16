import React, { Component } from "react";
import withCounter from "../hoc component/withCounter";
import withFunctionalCounter from "../hoc component/withFunctionalCounter";

class ClickCounter extends Component {
  render() {
    const { count, increment, name } = this.props;
    return (
      <div>
        <button onClick={increment}>{name} Clicked {count} times</button>
      </div>
    );
  }
}

//export default withCounter(ClickCounter);
 export default withFunctionalCounter(ClickCounter, 5);
