import React from 'react';
import './MensClothes.css'
import { Link } from 'react-router-dom';

const MensClothes = (props) => {
    const { name, price, image, key } = props.attire;
    return (
        <div className="col-4 mb-3 background5">
            <div>
                <Link to={`/attire/${key}`}><img width="410px" style={{marginRight:"30px"}} src={image} alt="" /></Link>
                <h1 className="head1">{name}</h1>
                <h3 className="head3">{price}</h3>
            </div>

        </div>
    );
};

export default MensClothes;