import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
	let navigate = useNavigate();

	const onLoginHandler = (e) => {
		e.preventDefault();

		let formData = new FormData(e.currentTarget);

		let email = formData.get("email");
		let password = formData.get("password");

		navigate("/");
		console.log("email > ", email, "password > ", password);
	};

	return (
		<Form onSubmit={onLoginHandler} method="POST" className="form-container">
			<Form.Group className="mb-3" controlId="formBasicEmail" >
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" name="email" placeholder="Enter email" />
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" name="password" placeholder="Password" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default Login;
