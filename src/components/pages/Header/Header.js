import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="body">
            <h1 className="h1" >Summer Collection</h1>
            <h2 className="h2" >ONLINE NOW</h2>
            <div class="d-flex margin">
                <button className="button">
                    Shop men's
                </button>
                <button className="button">
                    Shop women's
                </button>
            </div>
        
        </div>
    );
};

export default Header;