import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function LoginLayout() {
  return (
    <Container fluid className="p-0">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Link to="/dashboard" className="nav-link text-white">
          <h1>Dashboard</h1>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/profile" className="nav-link text-white">
              Profile
            </Link>
            <Link to="/settings" className="nav-link text-white">
              Settings
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row className="flex-nowrap">
        <Col xs={3} md={2} lg={1} className="bg-dark min-vh-100">
          <div className="d-flex flex-column align-items-center justify-content-center py-5">
            <Nav className="flex-column">
              <Link to="/user-management" className="nav-link text-white">
                users
              </Link>
              <Link to="/profile" className="nav-link text-white">
                Profile
              </Link>
            </Nav>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginLayout;
