import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Route, Routes } from "react-router-dom";
import Topbar from './../sidebar/TopBar';
import { PrivateRoute } from "../../utils/PrivateRoute";
import Home from "../home/Home";
const Content = ({ sidebarIsOpen, toggleSidebar }) => (
    <Container
      fluid
      className={classNames("content", { "is-open": sidebarIsOpen })}
    >
      <Topbar toggleSidebar={toggleSidebar} />
     <Routes>
        <Route exact path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      </Routes>
    </Container>
  );
  
  export default Content;