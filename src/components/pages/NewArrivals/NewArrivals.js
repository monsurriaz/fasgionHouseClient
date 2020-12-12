import React, { useState } from 'react';
import clothesInfo from '../../fakeData/clothesInfo';
import Clothes from '../Clothes/Clothes';
import './NewArrivals.css'

const NewArrivals = () => {
    const [clothes, setClothes] = useState(clothesInfo);

    return (
        <div className="background">
            <h1 className="arrivals">New Arrivals</h1>
            <div className="outer-wrapper">
                <div className="wrapper">
                    <div className="slide ">
                        {
                            clothes.map(clothes => <Clothes
                                clothes={clothes}
                                key={clothes.key}
                            ></Clothes>)
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default NewArrivals;