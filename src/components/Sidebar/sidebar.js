import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseFill,
  CreditCardFill,
  EnvelopeFill,
  Grid3x3GapFill,
  PeopleFill,
  PersonFill,
} from "react-bootstrap-icons";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";

export default function SideBar() {
  const { collapseSidebar } = useProSidebar();
  const [toggled, setToggled] = useState(true);

  const location = useLocation();

  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="bg-dark sidebar-div">
      <Sidebar backgroundColor="#00112c" className="" breakPoint="lg">
        {toggled && <div className="sidebar-header"></div>}

        <Menu className="sidebar-menu">
          <MenuItem
            component={<Link to="/dashboard" />}
            icon={<Grid3x3GapFill className="sidebar-icon"/>}
            className={`${splitLocation[1] === "dashboard" ? "active" : ""}`}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            component={<Link to="/workorder" />}
            icon={<BriefcaseFill className="sidebar-icon"/>}
            className={`${splitLocation[1] === "workorder" ? "active" : ""}`}
          >
            {" "}
            Workorder
          </MenuItem>
          <MenuItem
            component={<Link to="/provider" />}
            icon={<PersonFill className="sidebar-icon"/>}
            className={`${splitLocation[1] === "provider" ? "active" : ""}`}
          >
            {" "}
            Providers
          </MenuItem>
          <MenuItem
            component={<Link to="/freelancer" />}
            icon={<PeopleFill className="sidebar-icon"/>}
            className={`${splitLocation[1] === "freelancer" ? "active" : ""}`}
          >
            Freelancers{" "}
          </MenuItem>

          <MenuItem icon={<CreditCardFill className="sidebar-icon"/>}> Payments</MenuItem>
          <MenuItem icon={<EnvelopeFill className="sidebar-icon"/>}> Messages</MenuItem>
        </Menu>
        <Button
          variant="link"
          className="sb-button"
          onClick={() => {
            collapseSidebar();
            setToggled(!toggled);
          }}
        >
          {toggled ? <ArrowLeft /> : <ArrowRight />}
        </Button>
      </Sidebar>
    </div>
  );
}