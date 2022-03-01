import React from "react";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../../helpers/functions-general";
import { BsFillPersonFill } from "react-icons/bs";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <nav>
          <ul className="navigation__wrapper">
            <li>
              <NavLink
                to={`${devNavUrl}/menu`}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                <BsFillPersonFill />
                <span>menu</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${devNavUrl}/delivery`}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                <BsFillPersonFill />
                <span>delivery</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${devNavUrl}/location`}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                <BsFillPersonFill />
                <span>location</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${devNavUrl}/shop`}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                <BsFillPersonFill />
                <span>shop</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${devNavUrl}/ddcard`}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                <BsFillPersonFill />
                <span>dd card</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${devNavUrl}/login`}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                <BsFillPersonFill />
                <span>Logout</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
