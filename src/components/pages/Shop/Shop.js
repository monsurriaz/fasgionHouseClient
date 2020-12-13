import React from 'react';
import './Shop.css'

const Shop = () => {
    return (

        <div>
            <div className="row">
                    <div className="col-md-6 relative1 text-decoration">
                        <a href="/mens">
                            <div className="background-men ">
                                <h1 className="title" >Men</h1>
                            </div>
                        </a>
                    </div>
                <div className="col-md-6 relative text-decoration">
                    <a href="/womens">
                        <div className="background-women ">
                            <h1 className="title" >Women</h1>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Shop;