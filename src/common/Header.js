import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar bg-dark border-bottom border-body mb-3" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to={`/`} className="navbar-brand mb-0 h1">
                    Version Manager
                </Link>
            </div>
        </nav>
    )
};

export default Header;