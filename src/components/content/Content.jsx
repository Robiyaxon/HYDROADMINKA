import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Route, Routes } from "react-router-dom";

import { PrivateRoute } from "../../utils/PrivateRoute";
import ContactContainer from "../contact/ContactContainer";
import Topbar from './../sidebar/TopBar';
import Home from './../home/Home';
import HomePanel2 from "../home/HomePanel2";
import HomeAbout from "../home/HomeAbout";
import HomeOurWork from "../home/HomeOurWork";
import HomeProjectNumbers from "../home/HomeProjectNumbers";
import HomeRegion from "../home/HomeRegion";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
    <Container
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
        <Route exact path="/contact" element={<ContactContainer/>} />

      </Routes>
    </Container>
  );
  
  export default Content;