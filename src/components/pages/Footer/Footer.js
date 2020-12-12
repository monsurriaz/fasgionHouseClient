import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div style={{display:"flex"}} >
                <div className="background-info  col-md-6" id="info1">
                    <h1 className="title2" >Info</h1>
                    <div >
                        <div className="flex-2">
                            <img width="30px" src="https://i.imgur.com/7fQ4oy7.png" alt="" />
                            <a className="link" href="#">Sign In</a>
                        </div>
                        <div className="flex-2">
                            <img width="30px" src="https://i.imgur.com/v9frww0.png" alt="" />
                            <a className="link" href="#">Help center</a>
                        </div>
                        <div className="flex-2">
                            <img width="30px" src="https://i.imgur.com/6OkTayN.png" alt="" />
                            <a className="link" href="#">Live Chat</a>
                        </div>
                        <div className="flex-2">
                            <img width="30px" src="https://i.imgur.com/DnQjC5p.png" alt="" />
                            <a className="link" href="#">Careers</a>
                        </div>
                        <div className="flex-2">
                            <img width="30px" src="https://i.imgur.com/BleBzut.png" alt="" />
                            <a className="link" href="#">Contact</a>
                        </div>
                    </div>
                    <div class="d-flex social">
                        <img width="40px" src="https://i.imgur.com/RzaVlkw.png" alt="" />
                        <img style={{ marginLeft: "20px" }} width="40px" src="https://i.imgur.com/IRQHGjc.png" alt="" />
                        <img style={{ marginLeft: "20px", position: "relative", top: "5px" }} width="40px" height="30px" src="https://i.imgur.com/1DLVE52.png" alt="" />
                        <img style={{ marginLeft: "20px" }} width="40px" src="https://i.imgur.com/5UwPNgx.png" alt="" />
                    </div>
                    <div className="copyright">
                        <p>
                            Copyright ©2020 <br />
                        Terms & Conditions <br />
                        Privacy & Cookies <br />
                        Site by Shopify Plus Agency - Digital Cake <br />
                            <br />

                        Clark & Timms Ltd. <br />
                        Company no. 08442586
                        </p>
                    </div>
                </div>
                <div className="background-touch  col-md-6" id="touch" >
                    <h1 className="title2" >Keep in touch</h1>
                          <h6 className="interested">I'm intereted in:</h6>

                            <div class="container">
                                <div class="checkbox">
                                    <input type="checkbox" id="checkbox" name="" value=""/>
                                    <label for="checkbox"><span>Women's</span></label>
                                </div>

                                <div class="checkbox">
                                    <input type="checkbox" id="checkbox2" name="" value=""/>
                                    <label for="checkbox2"><span>Men's</span></label>
                                </div>
                            </div>

                          <input type="email" name="" id="email" placeholder="Enter your email here..."  />

                        </div>
                    </div>
                </div>
    );
};

export default Footer;