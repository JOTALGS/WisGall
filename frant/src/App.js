import './App.css';
import Rout from './router/Router';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUser } from './hooks/userHook';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {

  const { user, removeToken } = useUser();
  
  const handleLogout = () => {
    removeToken();
    window.location.reload()
  }
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="" style={{"backgroundColor": "#FF7F50",}}>
        <Container>
          <Navbar.Brand href="#home">WisGallery</Navbar.Brand>
          {user.isAuthenticated && (
          <>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="/store">Store</Nav.Link>
                      <Nav.Link href="/collection">Collection</Nav.Link>
                      <Nav.Link href="#" className=''>More deets</Nav.Link>
                      <Form className="d-flex" style={{"marginLeft": "5px",}}>
                          <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                          />
                          <Button variant="outline-warning" size='sm' className='p-1 mt-auto mb-auto'>Search</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/upload">Upload your Course</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Statsistics</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout} href="/">
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
            </>
            )}
            <Nav>
                {!user.isAuthenticated && (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/register">Sign Up</Nav.Link>
                </>
                )}
            </Nav>
        </Container>
      </Navbar>
      <article>
        <BrowserRouter>
          <Rout />
        </BrowserRouter>
      </article>
    </div>
  );
}

export default App;
