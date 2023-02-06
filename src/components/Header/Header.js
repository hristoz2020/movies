import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link className="button" to="/login">Login</Link>
                    <Link className="button" to="/register" >Register</Link>
                </section>
            </nav>
        </header>
    );
};

export default Header;