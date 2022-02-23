import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faChartGantt,
  faTransgender,
  faNewspaper,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Hydro Adminka</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Dummy Heading</p>
        <SubMenu title="Home" icon={faHome} items={submenus[0]} />
        <SubMenu title="About" icon={faBriefcase} items={submenus[2]} />
        <SubMenu title="Econimic" icon={faChartGantt} items={submenus[1]} />
        <SubMenu title="Corporative" icon={faBriefcase} items={submenus[3]} />
        <SubMenu title="Activities" icon={faTransgender} items={submenus[4]} />
        <SubMenu title="Tecnical" icon={faTools} items={submenus[5]} />
        <SubMenu title="News" icon={faNewspaper} items={submenus[6]} />
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Bosh Sahifa",
      target: "home",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      title: "Home About",
      target: "Home-about",
    },
    {
      title: "Home Our Work",
      target: "Home-our-work",
    },
    {
      title: "Home Project Numbers",
      target: "Home-project-numbers",
    },
    {
      title: "Home Region",
      target: "Home-region",
    },
  ],
  [
    {
      title: "Header",
      target: "economic",
    },
    {
      title: "Shartnomalar",
      target: "agreements",
    },
    {
      title: "Diagramma",
      target: "chart",
    },
    {
      title: "Ochiq Muloqot",
      target: "openSourses",
    },
  ],
  [
    {
      title: "Header",
      target: "aboutHeader",
    },
    {
      title: "Tashkilot tarixi",
      target: "organizationHistory ",
    },
    {
      title: "Meeting",
      target: "meeting",
    },
    {
      title: "Boshqaruv tuzilmasi",
      target: "teamMembers",
    },
    {
      title: "Kompaniya haqida",
      target: "aboutCompany",
    },
  ],
  [
    {
      title: "Header",
      target: "corporativeHeader",
    },
  ],
  [
    {
      title: "Header",
      target: "activitiesHeader",
    },
    {
      title: "Categories",
      target: "activitiesCategories",
    },
  ],
  [
    {
      title: "Header",
      target: "technical",
    },
    {
      title: "Video Url Youtube",
      target: "videoUrlYoutube",
    },
    {
      title: "Technical Machine",
      target: "technicalMachine",
    },
    {
      title: "Technical Machine Categories",
      target: "technicalMachineCategories",
    },
    {
      title: "Technical Statistics",
      target: "statistics",
    },
  ],
  [
    {
      title: "Header",
      target: "news",
    },
    {
      title: "Categories",
      target: "categories",
    },
  ],
];

export default SideBar;
