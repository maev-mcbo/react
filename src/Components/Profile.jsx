import React from "react";
import styled from "styled-components";
import avatarPlaceholder from "../assets/placeholder.png";

function Profile() {
  const Avatar = styled.img`
    border: 2px solid var(--highligth-color);
    margin: 1em;
    border-radius: 100%;
    width: 75px;
    height: 75px;
    background-blend-mode: normal;
  `;
  const Greeting = styled.p`
    color: #2d2d2d;
    font-weight: bold;
  `;
  const Name = styled.h1`
    font-weight: bolder;
    font-size: 2em;
    color: #000;
  `;

  return (
    <div className="flex items-center flex-row">
      <Avatar src={avatarPlaceholder} />
      <div className="leading-6">
        <Greeting> Hola 👋</Greeting>
        <Name> Mario E.</Name>
      </div>
    </div>
  );
}

export default Profile;
