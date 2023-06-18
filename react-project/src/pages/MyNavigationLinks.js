import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function MyNavigationLinks() {
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/login", { replace: true });
  };

  // Assistance of LocalStorage
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <></>;
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home"> PAYBILL</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>

              <Nav.Link as={Link} to={"/registration"}>
                Registration
              </Nav.Link>

              <Nav.Link as={Link} to={"/Aboutus"}>
                About us
              </Nav.Link>

              <Nav.Link as={Link} to={"/Contactus"}>
                contact us
              </Nav.Link>
        
              <Nav.Link onClick={logOutAction}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavigationLinks;
