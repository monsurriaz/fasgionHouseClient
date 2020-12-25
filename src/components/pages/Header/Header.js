import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="body">
            <h1 className="h1" >Winter Collection</h1>
            <h2 className="h2" >ONLINE NOW</h2>
            <div className="d-flex margin">

                <Link to="/mens">
                    <button className="button">
                        Shop men's
                    </button>
                </Link>
                <Link to="/womens">
                    <button className="button">
                        Shop women's
                    </button>
                </Link>


            </div>

        </div>
    );
};

export default Header;