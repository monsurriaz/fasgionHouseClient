import React from 'react';
import { Link } from 'react-router-dom';
import './WomensClothes.css'

const WomensClothes = (props) => {
    const { name, price, image, key } = props.cloth;
    return (
        <div className="col-4 mb-3 background5">
                <div >
                    <Link to={`/cloth/${key}`}><img width="410px" style={{ marginRight: "30px" }} src={image} alt="" /></Link>
                    <h1 className="head1">{name}</h1>
                    <h3 className="head3">{price}</h3>
                </div>
        </div>
    );
};

export default WomensClothes;