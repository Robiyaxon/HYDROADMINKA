import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Route, Routes } from "react-router-dom";

import { PrivateRoute } from "../../utils/PrivateRoute";
import Topbar from './../sidebar/TopBar';
import Home from './../home/Home';
import HomePanel2 from "../home/HomePanel2";
import HomeAbout from "../home/HomeAbout";
import HomeOurWork from "../home/HomeOurWork";
import HomeProjectNumbers from "../home/HomeProjectNumbers";
import HomeRegion from "../home/HomeRegion";
import { Contact } from "../contact/Contact";
import { Economic } from './../economic/Economic';
import { EconomicChart } from './../economic/EconomicChart';
import { EconomicHeader } from './../economic/EconomicHeader';
import { OpenSourses } from './../economic/OpenSourses';
import { About } from './../about/About';
import { OrganizationHistory } from './../about/OrganizationHistory';
import { Meeting } from './../about/Meeting';
import { TeamMembers } from './../about/TeamMembers';
import { Corporative } from './../corporative/Corporative';
import { MainPartners } from './../corporative/MainPartners';
import { Activities } from "../activities/Activities";
import { AboutCompany } from "../about/AboutCompany";

const Content = ({ sidebarIsOpen, toggleSidebar }) => {
  return <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Routes>
      <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route exact path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route exact path="/home-2" element={<PrivateRoute><HomePanel2 /></PrivateRoute>} />
      <Route exact path="/home-about" element={<PrivateRoute><HomeAbout /></PrivateRoute>} />
      <Route exact path="/home-our-work" element={<PrivateRoute><HomeOurWork /></PrivateRoute>} />
      <Route exact path="/home-project-numbers" element={<PrivateRoute><HomeProjectNumbers /></PrivateRoute>} />
      <Route exact path="/home-region" element={<PrivateRoute><HomeRegion /></PrivateRoute>} />
      <Route exact path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
      <Route exact path="/economic" element={<PrivateRoute><EconomicHeader /></PrivateRoute>} />
      <Route exact path="/agreements" element={<PrivateRoute><Economic /></PrivateRoute>} />
      <Route exact path="/chart" element={<PrivateRoute><EconomicChart /></PrivateRoute>} />
      <Route exact path="/openSourses" element={<PrivateRoute><OpenSourses /></PrivateRoute>} />
      <Route exact path="/aboutHeader" element={<PrivateRoute><About /></PrivateRoute>} />
      <Route exact path="/organizationHistory" element={<PrivateRoute><OrganizationHistory /></PrivateRoute>} />
      <Route exact path="/meeting" element={<PrivateRoute><Meeting /></PrivateRoute>} />
      <Route exact path="/teamMembers" element={<PrivateRoute><TeamMembers /></PrivateRoute>} />
      <Route exact path="/corporativeHeader" element={<PrivateRoute><Corporative /></PrivateRoute>} />
      <Route exact path="/mainPartners" element={<PrivateRoute><MainPartners /></PrivateRoute>} />
      <Route exact path="/activitiesHeader" element={<PrivateRoute><Activities /></PrivateRoute>} />
      <Route exact path="/aboutCompany" element={<PrivateRoute><AboutCompany /></PrivateRoute>} />

    </Routes>
  </Container>
}

export default Content;