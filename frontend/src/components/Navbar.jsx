import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                <FaCalendarCheck />
                <span>Système de réservation</span>
            </div>

            <ul className="nav-links">

                <li>
                    <Link to="/">Accueil</Link>
                </li>

                <li>
                    <Link to="/login">Connexion</Link>
                </li>

                <li>
                    <Link to="/register">Inscription</Link>
                </li>

            </ul>

        </nav>
    );
}

export default Navbar;