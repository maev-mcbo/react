import React from "react";
import styled from "styled-components";
import { SiJirasoftware, SiSlack,SiIntercom } from "react-icons/si";
import { FaPlus } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <SiJirasoftware />,
      name: "Jira software",
      link: "#",
    },
    {
      icon: <SiSlack />,
      name: "Slack",
      link: "#",
    },
    {
      icon: <SiIntercom />,
      name: "Intercom",
      link: "#",
    },
  ];

  const Card = styled.div`
    background-color: white;
    border-radius: 14px;
    padding: 10px;
    margin-top: 5px;

    & li {
      padding: 10px;
      font-weight: bold;
    }
  `;
  return (
    <div>
      <p className="bold text-xs mt-3 p-3">Services: <strong>{services.length}</strong></p>
      <Card>
        <ul className="flex flex-col items-start">
          {services.map((item) => {
            return (
              <li key={item.name}>
                <a href={item.link}>
                  <p className="flex items-center">
                    <span className="pr-2"> {item.icon}</span> {item.name}
                  </p>
                </a>
              </li>
            );
          })}
          <li>
            <p className="flex items-center">
              <span className="pr-2">
                <FaPlus />
              </span>
              Add new plugin
            </p>
          </li>
        </ul>
      </Card>
    </div>
  );
}

export default Services;
