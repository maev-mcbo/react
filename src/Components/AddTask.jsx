import React from "react";
import styled from "styled-components";


function AddTask() {
  const Circle = styled.div`
    width: 4em;
    height: 4em;
    background-color: var(--highligth-color);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.75em;
    transition: all ease-in-out 0.3s;

    :hover {
      transform: scale(1.2);
    }
  `;

  const Card = styled.div`
    background-color: white;
    border-radius: 14px;
    padding: 10px;
    margin: 5px;

    & li {
      padding: 10px;
      font-weight: bold;
    }
    & a {
      color: gold;
    }
  `;

  return (
    <Card className="flex justify-center items-center flex-col font-bold">
      <a href="#">
        <Circle>
          <span className="text-white text-4xl "> + </span>
        </Circle>
      </a>
      <p className="text-2xl">Add task</p>
      <p className="text-[10px]">
        Or use <a href="#">Inlike Link</a>
      </p>
    </Card>
  );
}

export default AddTask;
