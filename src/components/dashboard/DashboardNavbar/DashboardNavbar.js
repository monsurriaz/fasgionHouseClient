import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './DashboardNavbar.css';
import logo from '../../../images/fashion logo.png';


const DashboardNavbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <Link className="navbar-brand">
                    <img className="logo" src={logo} alt="fashoin-house"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link">
                            {loggedInUser.name}
                        </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default DashboardNavbar;