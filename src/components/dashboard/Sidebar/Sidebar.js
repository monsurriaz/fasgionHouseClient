import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserPlus, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://still-ridge-49659.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [])

    return (
        <section className="sidebar d-flex flex-column">
            <ul className="list-unstyled pt-4">
                <li className="mb-2">
                    <Link to="/" className="text-dark nav-link"> <FontAwesomeIcon className="mr-1 c_color" icon={faHome} /> <span>Home</span> </Link>
                </li>

                {/* {
                    isAdmin ? <> */}
                        <li>
                            <Link to="/order" className="text-dark nav-link">
                                <FontAwesomeIcon className="mr-2 c_color" icon={faShoppingCart} />
                                <span>Order list</span></Link>
                        </li>
                        <li>
                            <Link to="/addProducts" className="text-dark nav-link"><FontAwesomeIcon className="mr-1 c_color" icon={faShoppingBag} /> <span>Add Products</span></Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" className="text-dark nav-link"><FontAwesomeIcon className=" c_color" icon={faUserPlus} /> <span>Make Admin</span></Link>
                        </li>
                    {/* </> : <> */}
                        <li>
                            <Link to="/myCartList" className="text-dark nav-link">
                                <FontAwesomeIcon className="mr-2 c_color" icon={faShoppingCart} />
                                <span>Cart list</span> </Link>
                        </li>
                    {/* </>
                } */}
            </ul>
        </section>
    );
};

export default Sidebar;