import { Navbar, Container, Nav } from "react-bootstrap"
import { NavLink, useNavigate } from "react-router-dom"
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";

const NavbarComponent = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm('Apakah Anda yakin ingin logout?');
    if (confirmLogout) {
      setIsLoggedIn(false);
      navigate('/login');
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-transparent navbar">
        <Container>
          <Navbar.Brand href="/"><img src="/nm.jpg" alt="Brand Logo" width="100" height="80" className="d-inline-block align-top"  style={{ marginLeft: '0' }}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-links">
              <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</Nav.Link> 
              <Nav.Link as={NavLink} to="/categories" className={({ isActive }) => isActive ? "active" : ""}>Categories</Nav.Link>
              <Nav.Link as={NavLink} to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</Nav.Link>
              <Nav.Link as={NavLink} to="/login" className={({ isActive }) => isActive ? "active" : ""} onClick={isLoggedIn ? handleLogout : null}>
                {isLoggedIn ? <FaSignOutAlt size={20} /> : <FaRegUser size={20} />}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent