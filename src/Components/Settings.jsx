import React from "react";
import styled from "styled-components";
import { TbArrowsDownUp, TbSettings,TbUser, TbChartPie2, TbGps, TbNotes} from "react-icons/tb";




function Settings() {
  const settingsIcons = [
    {
      icon: <TbSettings />,
      name: "1",
      link: "#",
    },
    {
      icon: <TbArrowsDownUp />,
      name: "2",
      link: "#",
    },
    {
      icon: <TbUser />,
      name: "3",
      link: "#",
    },
    {
      icon: <TbChartPie2/>,
      name: "4",
      link: "#",
    },
    {
      icon: <TbGps/>,
      name: "5",
      link: "#",
    },
    {
      icon: <TbNotes />,
      name: "6",
      link: "#",
    },
  ];

  const CardSettings = styled.div`
    background-color: white;
    border-radius: 14px;
    /* padding: 10px; */
    margin-top: 5px;
    align-items: center;
    overflow-x: auto;
    display: flex;
    justify-content: space-evenly;
    

    & span {
      padding: 1px;
      text-align: center;

    }

    & svg {
        /* padding: 10px; */
        width: 20px !important;
        height: 20px !important;
        opacity: 0.7;
    }
  `;

  return (
    <div className="mb-3">
    <p className="bold text-xs mt-3 p-3">Settings: <strong>{settingsIcons.length}</strong></p>
      <CardSettings>
        {settingsIcons.map((item) => {
          return (
            <span key={item.name}>
              <a href={item.link}>
                <span>{item.icon}</span>
              </a>
            </span>
          );
        })}
      </CardSettings>
    </div>
  );
}

export default Settings;
