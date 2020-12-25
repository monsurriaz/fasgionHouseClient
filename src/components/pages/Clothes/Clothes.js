import React from 'react';
import { Link } from 'react-router-dom';
import './Clothes.css'

const Clothes = (props) => {
    // console.log(props);
    const {name, price, image, _id } = props.clothes;
    
    return (
        <div className="align">
            <Link to={`/products/${_id}`}><img width="300px" src={image} alt=""/></Link>
            <h1 className="head1">{name}</h1>
            <h3 className="head3">{price} </h3>
        </div>
    );
};

export default Clothes;