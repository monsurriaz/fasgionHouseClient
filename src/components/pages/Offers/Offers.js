import React from 'react';
import './Offers.css'

const Offers = () => {
    return (
        <div>
            <div className="flex">
                <div className="width">
                    <img width="48px" src="https://i.imgur.com/QG3eRW8.png" alt="" />
                    <h4 className="order">15% Off First Order</h4>
                    <h5 className="list">Subscribe to our mailing list for 15% off your first order.</h5>
                </div>
                <div className="width two-margin">
                    <img width="70px" src="https://i.imgur.com/ljjjXHf.png" alt="" />
                    <h4 className="order">30 Day Returns</h4>
                    <h5 className="list">Shop with certainty with
                    a 30 day returns policy.</h5>
                </div>
                <div className="width two-margin">
                    <img width="48px" src="https://i.imgur.com/unoZlgu.png" alt="" />
                    <h4 className="order">Worldwide shipping</h4>
                    <h5 className="list">Free worldwide shipping on
                     all orders over $65</h5>
                </div>
            </div>
        </div>
    );
};

export default Offers;