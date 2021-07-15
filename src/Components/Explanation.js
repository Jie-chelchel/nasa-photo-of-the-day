import React from "react";

function Explanation(props) {
  return (
    <div>
      <div>
        <h4>Explanation: </h4>
        <p> {props.explanation}</p>
      </div>
    </div>
  );
}

export default Explanation;
