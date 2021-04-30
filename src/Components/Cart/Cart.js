import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart ,faTags} from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);

    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const course = cart[i];
    //     total = total+course.courseFee;
        
    // }

    const total = cart.reduce((total, course) => total + course.courseFee,0)
    
    return (
        <div className="text-center">
            <h3 className="mt-5">Order Summery</h3>
            <h5>Total Course Enrolled: {cart.length}</h5>
            <h5 className="text-danger"><FontAwesomeIcon icon={faTags} /> Total Price : {total}.00 $</h5>
            <button className="btn btn-warning form-control btn-lg"><FontAwesomeIcon icon={faShoppingCart} /> Review Order</button>
        </div>
    );
};

export default Cart;