import React from "react";
import styled from "styled-components";
import {
  TbApps,
  TbFolder,
  TbCalendarEvent,
  TbMail,
  TbNotification,
  TbPaperBag,
} from "react-icons/tb";

function Menu() {
  const menuLinks = [
    {
      icon: <TbApps />,
      name: "Dashboard",
      link: "#",
    },
    {
      icon: <TbFolder />,
      name: "My project task",
      link: "#",
    },
    {
      icon: <TbCalendarEvent />,
      name: "Calendar",
      link: "#",
    },
    {
      icon: <TbMail />,
      name: "Mail",
      unread: 4,
      link: "#",
    },
    {
      icon: <TbNotification />,
      name: "Notification",
      count: 3,
      link: "#",
    },
    {
      icon: <TbPaperBag />,
      name: "Sales",
      link: "#",
    },
  ];

  const MenuLi = styled.li`
    /* height: 30px; */
    /* margin: 7px; */
    padding: 15px;
    line-height: normal;
    display: flex;
    font-weight: bolder;
    border-radius: 10px;
    align-items: flex-start;

    & a {
        /* line-height: 1px; */
        /* align-items: flex-start; */
    }

    & a span {
        margin-right: 5px;

        /* align-items: flex-start; */
    }
    & svg{
        width: 20px;
        height: 20px;
        opacity: 0.5;
    }
    &:hover {
      color: white;
      background-color: #2f81ff;
      border-radius: 10px;
      transition: all 0.3s;
    }
  `;
  return (
    <div>
      <p className="bold text-xs mt-3 p-3">Menu: <strong>{menuLinks.length}</strong></p>
      <ul className="flex flex-col">
        {menuLinks.map((item) => {
          return (
            <MenuLi key={item.name}>
              <a href={item.link} className="flex flex-row">
                <span>{item.icon}</span>
                <p>{item.name}</p>
              </a>
            </MenuLi>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
