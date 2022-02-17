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

    </Routes>
  </Container>
}

export default Content;