import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import React, { useState } from "react"
import "./checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider"

function Checkout() {
    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Ad" />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket && basket.length > 0 ? (
                        basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating} />
                        ))
                    ) : (
                        <p>Your basket is empty.</p>
                    )}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
