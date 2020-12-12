import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './DashboardNavbar.css';
import logo from '../../../images/fashion logo.png';


const DashboardNavbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <Link className="navbar-brand">
                    <img className="logo" src={logo} alt="fashoin-house"/>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <Link className="nav-link">
                            {loggedInUser.name} Riaz
                        </Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default DashboardNavbar;