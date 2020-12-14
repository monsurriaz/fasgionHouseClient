import React from 'react';
import { Link } from 'react-router-dom';
import './Clothes.css'

const Clothes = (props) => {
    console.log(props);
    const {name, price, image, key } = props.clothes;
    
    return (
        <div className="align">
            <Link to={`/products/${key}`}><img width="300px" src={image} alt=""/></Link>
            <h1 className="head1">{name}</h1>
            <h3 className="head3">{price} </h3>
        </div>
    );
};

export default Clothes;