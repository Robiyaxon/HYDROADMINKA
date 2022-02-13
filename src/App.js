import { useState } from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Login from './components/login/Login';
import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/sidebar/TopBar";
import { PrivateRoute } from './utils/PrivateRoute';
import './App.css'
function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  return (
    <div className="App">
      <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <Topbar toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path="/" element={<PrivateRoute><h1>/</h1></PrivateRoute>}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
