import React, { useContext, useState, useEffect } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isSubmitted, setIsSubmitted] = useState(false) 
  const [checkoutForm, setCheckoutForm] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setCheckoutForm(true);
  };

  const updateIsSubmitted = (value) => {
    setIsSubmitted(value)
  }

  useEffect(() => {
    console.log(isSubmitted)
    if(isSubmitted){
      cartCtx.clearCart()
      setIsSubmitted(false)
    }
  },[cartCtx, isSubmitted])
  
  let cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Pay
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkoutForm && <Checkout onCancel = {props.onHideCart} setIsSubmitted = {updateIsSubmitted}/>}
      {!checkoutForm && modalActions}
    </Modal>
  );
};

export default Cart;
