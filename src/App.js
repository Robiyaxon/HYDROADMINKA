import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import SideBar from "./components/sidebar/SideBar";
<<<<<<< HEAD
import Content from './components/content/Content';
import './App.css'
=======
import Content from "./components/content/Content";
import "./App.css";
>>>>>>> 2af47e136b3b6c45037518fbc8e3db4656ad97ee

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <div className="App">
      <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      <Routes>
<<<<<<< HEAD
        {/* <Route path="/" element={<PrivateRoute>yrty</PrivateRoute>}/> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>}/> */}
=======
        <Route path="/login" element={<Login />} />
>>>>>>> 2af47e136b3b6c45037518fbc8e3db4656ad97ee
      </Routes>
    </div>
  );
}

export default App;
