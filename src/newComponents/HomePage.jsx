import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom"; // Make sure to import Link from your routing library
import MainHeader from "./Layout/MainHeader";
import MainSidebar from "./Layout/MainSidebar/MainSidebar";

function HomePage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const toggleSideBarHandler = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  return (
    <>
      <MainHeader toggleSidebar={toggleSideBarHandler}></MainHeader>
      <Row className="full-height">
        <Col md={1}>
          <MainSidebar
            toggleSidebar={toggleSideBarHandler}
            isCollapsed={isSidebarCollapsed}
          ></MainSidebar>
        </Col>
        <Col md={11}>
          <Outlet />
        </Col>
      </Row>
    </>
  );
}

export default HomePage;
