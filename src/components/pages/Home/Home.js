import React from "react";
import Footer from "../Footer/Footer";
import Goods from "../Goods/Goods";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import NewArrivals from "../NewArrivals/NewArrivals";
import Offers from "../Offers/Offers";
import Shop from "../Shop/Shop";
import Writings from "../Writings/Writings";

const Home = () => {
   return (
      <div>
         <NavBar/>
         <Header/>
         <Offers/>
         <Shop/>
         <NewArrivals/>
         <Goods/>
         <Writings/>
         <Footer></Footer>
         

      </div>
   );
};

export default Home;
