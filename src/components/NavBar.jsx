import { Navbar, Nav } from 'react-bootstrap'

const NavBar = (props) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">{props.title} - Strive for food</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                {
                    props.links.map(link => <Nav.Link key={link} href={'#' + link.toLowerCase()}>{link}</Nav.Link>)
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar

// functional components are a touch faster than class based ones
