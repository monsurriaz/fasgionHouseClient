import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData3 from '../../fakeData/womenInfo'
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const WomenClothesDetail = () => {
    const { clothKey } = useParams();
    const cloth = fakeData3.find(pd => pd.key === clothKey); 
    const { name, price, image } = cloth;
    return (
        <div>
            <div className="color">
                <NavBar></NavBar>
                <div className="row" >
                    <div style={{ display: "flex" }}>
                        <div className="image">
                            <img width="500px" src={image} alt="" />
                        </div>
                        <div className="name">
                            <h1 className="head2">{name}</h1>
                            <h3 className="head4">{price}</h3>
                            <button className="cart">Add cart</button>
                            <div>
                                <div className="flex6">
                                    <div className="width1">
                                        <img width="38px" src="https://i.imgur.com/QG3eRW8.png" alt="" />
                                        <h4 className="order1">15% Off First Order</h4>
                                    </div>
                                    <div className="width1 two-margin1">
                                        <img width="48px" src="https://i.imgur.com/ljjjXHf.png" alt="" />
                                        <h4 className="order1">30 Day Returns</h4>
                                    </div>
                                    <div className="width1 two-margin1">
                                        <img width="40px" src="https://i.imgur.com/unoZlgu.png" alt="" />
                                        <h4 className="order1">Worldwide shipping</h4>
                                    </div>
                                </div>
                            </div>




                            <div>
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingOne">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Description
                                        </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">An improved version of our earlier deck jacket, it features storm cuffs, waist toggles & a storm front fastening to keep you warm in the coldest months. Includes 3 P&Co artwork stencils- so you can make it your own.</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                Details

                                        </button>
                                        </h2>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                <ul>
                                                    <li>100% cotton twill</li>
                                                    <li>Sherpa-lined throughout</li>
                                                    <li>Storm cuffs</li>
                                                    <li>Printed P&Co canvas label</li>
                                                    <li>Includes 3 artwork stencils for customisation</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Fit

                                        </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                <ul>
                                                    <li>This is a regular fit</li>
                                                    <li>True to size</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingFour">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                Delivery
                                        </button>
                                        </h2>
                                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">
                                                <ul>
                                                    <li>Free worldwide shipping on all orders over $65.
                                                </li>
                                                    <li>
                                                        Orders dispatched within 1-2 working days
                                                        Please note due to COVID-19, we may be experiencing some delays in processing orders.
                                                </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>









                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default WomenClothesDetail;