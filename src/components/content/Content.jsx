import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Route, Routes } from "react-router-dom";

import { PrivateRoute } from "../../utils/PrivateRoute";
import ContactContainer from "../contact/ContactContainer";
import Topbar from './../sidebar/TopBar';
import Home from './../home/Home';

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
    <Container
      fluid
      className={classNames("content", { "is-open": sidebarIsOpen })}
    >
      <Topbar toggleSidebar={toggleSidebar} />
     <Routes>
        <Route exact path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route exact path="/contact" element={<ContactContainer/>} />

      </Routes>
    </Container>
  );
  
  export default Content;