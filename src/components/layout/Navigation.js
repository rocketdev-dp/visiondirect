import { useContext, useEffect } from 'react';

import React from "react";
import classes from "./Navigation.module.css";
import CartIcon from "../../assets/images/icons/cart-icon-white.png";
import CartContext from '../../store/cart-context';

const Navigation = (props) => {
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);

    const showCart = (event) => {
        event.preventDefault();
        props.onshowCart();
    };

    useEffect(() => {
        if (items.length === 0) {
          return;
        }
      }, [items]);
    return (
        <div className={classes.nav_row}>
            <div className={classes.container_inner}>
                <div className={classes.nav_col_left}>
                    <nav>
                        <ul>
                            <li>Contact Lenses</li>
                            <li>Eye Care</li>
                            <li>Solutions</li>
                            <li>Help & News</li>
                            <li>OFFERS</li>
                        </ul>
                    </nav>
                </div>
                <div className={classes.nav_col_right}>
                    <ul>
                        <li>Login</li>
                        <li>
                            
                            <button className={classes.cartbutton} onClick={showCart}>
                                <img src={CartIcon} alt="Cart Icon" />
                                <span>Your Cart</span>
                                <span className={classes.badge}>{numberOfCartItems}</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navigation;