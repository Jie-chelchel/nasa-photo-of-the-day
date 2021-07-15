import React from "react";
import styled from "styled-components";

function ImageDisplay(props) {
  const { isLoading } = props;
  const WrapperDiv = styled.div`
    width: 50%;
    overflow: hidden;
  `;
  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      <h4>{props.date}</h4>
      <div className="wrapper">
        <img style={{ width: 400, height: 300 }} src={props.url} alt="nasaA" />
      </div>
    </div>
  );
}

export default ImageDisplay;
