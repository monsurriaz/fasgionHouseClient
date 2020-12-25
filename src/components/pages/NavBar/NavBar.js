import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/LogoMakr-8HUQ3T.png'
import './NavBar.css';
import CartIcon from '../../../images/shopping-cart-solid.svg';
import { UserContext } from '../../../App';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(user);
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="margin-left">
                        <Link to="/home">
                            <img width="140px" src={logo} alt="logo" />
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav items">
                            <li className="nav-item">
                                <Link className="nav-link"  to="/mens">Men</Link>
                            </li>
                            <li className="nav-item items2">
                                <Link className="nav-link" to="/womens">Women</Link>
                            </li>
                            <li className="nav-item items2">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item items2">
                                <Link className="nav-link" to='/addProduct'>Journal</Link>
                            </li>
                            <li className="nav-item items2">
                                <Link className="nav-link" to="/books">Books</Link>
                            </li>
                            <li className="nav-item items2">
                                <Link className="nav-link" to="/goods">Goods</Link>
                            </li>
                            <li className="nav-item items2">
                                {
                                    loggedInUser.isSignIn 
                                    ? <button onClick={() => setLoggedInUser({})} className="btn btn-success">Log Out</button> 
                                    : <Link className="nav-link" to='/login'>
                                        <button className="btn btn-success">Login</button>
                                    </Link>
                                }
                            </li>
                        </ul>
                        <ul className="navbar-nav items ml-auto custom_nav">
                            <li className="close mr-2">
                                <p>{loggedInUser.name}</p>
                            </li>
                            <li className="nav-cart">
                                <span>0</span>
                                <Link to='/cart'>
                                    <img src={CartIcon} alt="Fashion House" width="20px" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;