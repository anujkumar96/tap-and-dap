// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "react-bootstrap";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link,useLocation,NavLink } from "react-router-dom";
import "./MainSidebar.scss";
import { useState } from "react";

const MainSidebar = ({ isCollapsed, toggleSidebar }) => {
  const [activePage,setActivePage]=useState('employee')
  
  const location = useLocation();
  const menuItemStyle = {
    color: "blue",
    backgroundColor:"white"
    // Change this color to the desired color
  };
 
  const inactiveStyle={
    color: "blue",
  }

  return (
    // <aside>
    <Sidebar>
      <Menu  menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}>
        <MenuItem active={true}  style={window.location.pathname === '/homepage'?menuItemStyle:inactiveStyle} component={<Link to="/homepage"/>}>Employee</MenuItem>
        <MenuItem active={true} component={<Link to="client" /> } style={window.location.pathname === '/homepage/client'?menuItemStyle:inactiveStyle} >Client</MenuItem>
        <MenuItem active={true} component={<Link to="project" />} style={window.location.pathname === '/homepage/project'?menuItemStyle:inactiveStyle} >Project</MenuItem>
      </Menu>
    </Sidebar>
    // </aside>
  );
};

export default MainSidebar;
