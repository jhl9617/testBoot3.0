import React, { useCallback, useState } from "react";
import { Container, Navbar, Nav, Button, Col, Row } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const randomIntFromInterval = useCallback((min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }, []);

  const handlePostavigation = useCallback(() => {
    navigate(`/post/${randomIntFromInterval(6, 12)}`);
  }, [randomIntFromInterval, navigate]);
  return (
    <Container fluid>
      {/* Header */}
      <Row>
        <Col margin={0}>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Button onClick={toggleSidebar}>☰</Button>
            <Navbar.Brand href="/">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/settings">
                  Settings
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link as={Link} to="/user-management">
                  User Management
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>

      {/* Body */}
      <Row>
        {/* Sidebar */}
        <Col xs={2} style={{ display: sidebarOpen ? "block" : "none" }}>
          <div id="sidebar-wrapper" className="bg-light">
            <Nav className="flex-column">
              {/* sider 컨텐츠 */}
              <Nav.Link onClick={handlePostavigation}>Random Post</Nav.Link>
              {/* Add other sidebar items */}
            </Nav>
          </div>
        </Col>

        {/* Content */}
        <Col xs={sidebarOpen ? 10 : 12} id="page-content-wrapper">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
