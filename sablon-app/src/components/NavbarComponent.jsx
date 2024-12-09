import { Navbar, Container, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-transparant navbar">
        <Container>
          <Navbar.Brand href="/"><img src="/nm.jpg" alt="Brand Logo" width="100" height="80" className="d-inline-block align-top"  style={{ marginLeft: '0' }}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-links">
              <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</Nav.Link> 
              <Nav.Link as={NavLink} to="/categories" className={({ isActive }) => isActive ? "active" : ""}>Categories</Nav.Link>
              <Nav.Link as={NavLink} to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent