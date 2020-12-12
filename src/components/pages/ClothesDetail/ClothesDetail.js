import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/clothesInfo';
// import Clothes from '../Clothes/Clothes';

const ClothesDetails = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    const {name, price, image} = product;
    console.log(product);
    return (
        <div>
            {/* <Clothes product={product} ></Clothes> */}
            {/* <h1>{name}</h1> */}
            <div className="align">
                <img width="300px" src={image} alt=""/>
                <h1 className="head1">{name}</h1>
                <h3 className="head3">{price} </h3>
            </div>
        </div>
    );
};

export default ClothesDetails;