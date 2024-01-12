import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
    return(
        <div className="home">
                <div className="home__container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image"/>
                        <div className="home__row">
                            <Product 
                            id="12345678"
                            title="laptop bag"
                            price={11.96}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"/>
                            <Product 
                            id="12345678"
                            title="laptop bag"
                            price={11.96}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"/>
                        </div>
                        <div className="home__row">
                            <Product 
                            id="12345678"
                            title="laptop bag"
                            price={11.96}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"/>
                            <Product 
                            id="12345678"
                            title="laptop bag"
                            price={11.96}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"/>
                        </div>
                        <div className="home__row">
                            <Product 
                            id="12345678"
                            title="laptop bag"
                            price={11.96}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"/>
                            <Product 
                            id="12345678"
                            title="laptop bag"
                            price={11.96}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"/>
                        </div>
                
                </div>
        </div>
    )
}

export default Home