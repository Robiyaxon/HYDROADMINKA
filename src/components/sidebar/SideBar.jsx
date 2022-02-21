import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faChartGantt,
  faTransgender
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
      <h3>Hydro  Adminka</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Dummy Heading</p>
        <SubMenu title="Home" icon={faHome} items={submenus[0]} />
        <SubMenu title="About" icon={faBriefcase} items={submenus[2]} />
        <SubMenu title="Econimic" icon={faChartGantt} items={submenus[1]} id={'longTitles'}/>
        <SubMenu title="Corporative" icon={faBriefcase} items={submenus[3]} />
        <SubMenu title="Faoliyatlar" icon={faTransgender} items={submenus[4]} />
        <SubMenu title="Texnik" icon={faTransgender} items={submenus[5]} />


        <NavItem>
          <NavLink tag={Link} to={"/pages"}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            FAQ
          </NavLink>
        </NavItem>
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
    {
      title: "Hamkorlar",
      target: "mainPartners",
    }
  ],
  [
    {
      title: "Header",
      target: "activitiesHeader",
    },
    {
      title: "Hamkorlar",
      target: "mainPartners",
    }
  ],
  [
    {
      title: "Header",
      target: "technical",
    },
    {
      title: "Video Url Youtube",
      target: "videoUrlYoutube",
    }
  ],
];

export default SideBar;
