import React from "react";
import styled from "styled-components";

function WindowHandlersButtons() {
  const RedCircle = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 100px;
    background-color: red;
    box-shadow: 1px -2px 73px -9px rgba(255, 0, 0, 0.54);
    margin-right: 5px;
    margin-top: 10px;
  `;
  const GreenCircle = styled(RedCircle)`
    background-color: rgb(34 197 94);
  `;
  const YellowCircle = styled(RedCircle)`
    background-color: rgb(234 179 8);
  `;

  return (
    <div className="container flex pl-3">
      <RedCircle></RedCircle>
      <YellowCircle></YellowCircle>
      <GreenCircle></GreenCircle>
    </div>
  );
}

export default WindowHandlersButtons;
