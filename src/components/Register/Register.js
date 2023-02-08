import { useNavigate } from 'react-router';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
    let navigate = useNavigate();

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        navigate('/');
        console.log('email > ',email,'password > ',password);
    }
    
    return (
        <Form onSubmit={registerSubmitHandler} method="POST" className="form-container">
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Repeat Password</Form.Label>
				<Form.Control type="password" name="password" placeholder="Repeat Password" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
    );
}

export default Register;