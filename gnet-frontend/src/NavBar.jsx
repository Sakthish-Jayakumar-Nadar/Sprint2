import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <nav id="navbar">
            <Link id="navbar-a" className="navbar">ISP</Link>
            <div>
                <Link to="/Network/Network1" className="navbar-link">Network1</Link>
                <Link to="/Network/Network2" className="navbar-link">Network2</Link>
                <Link to="/Network/Network3" className="navbar-link">Network3</Link>
            </div>
        </nav>
    )
}

export default NavBar