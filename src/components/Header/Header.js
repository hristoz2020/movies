import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>Movies</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link to="/" as={Link}>Home</Nav.Link>
					<Nav.Link to="/login" as={Link}>Login</Nav.Link>
					<Nav.Link to="/register" as={Link}>Register</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
