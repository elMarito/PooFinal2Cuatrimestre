import React, { useContext, useState } from 'react';
import { appContext } from '../context/appContext';

import '../styles/cart.css';
// const Cart = ({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) => {
//============================
const Cart = () => {
  const { cache, setCache } = useContext(appContext);
  // let products = cache.products;
  let cart = cache.cart;
  // const [counter, setCounter] = useState(0);

  const increaseQuantity = (product) => {
    const updatedCart = cart.map(p =>
      p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
    );
    // setCache({ ...cache, cart: updatedCart });
    setCache((prevState) => ({ ...prevState, cart: updatedCart, }));
    // setCart(updatedCart);
  };

  const decreaseQuantity = (product) => {
    if (product.quantity === 1) {
      removeFromCart(product);
    } else {
      const updatedCart = cart.map(p =>
        p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
      );
      // setCache({ ...cache, cart: updatedCart });
      setCache((prevState) => ({ ...prevState, cart: updatedCart, }));
      // setCart(updatedCart);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter(p => p.id !== product.id);
    // setCache({ ...cache, cart: updatedCart });
    setCache((prevState) => ({ ...prevState, cart: updatedCart, }));
    // setCart(updatedCart);
  };
  //============================
  const getTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="cart">
      <header>
        <h2>
          <span class="left-text">Shoping Cart</span>
          <span class="right-text"> {cart.length > 0 ? `( ${cart.length} product(s) )` : ""}</span>
        </h2>
      </header>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul>
          {/* <p>{cart.length} product{cart.length>1?"s":""}</p> */}
          {cart.map(product => (
            <li key={product.id}>
              {/* <span>{product.name} - ${product.price} x {product.quantity}</span> */}
              <img src={product.image} alt={product.title} />
              <span>{product.title} - ${product.price} x {product.quantity}</span>
              <div>
                <button onClick={() => increaseQuantity(product)}>+</button>
                <button onClick={() => decreaseQuantity(product)}>-</button>
                <button onClick={() => removeFromCart(product)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${getTotal()}</h3>
    </div>
  );
};

export default Cart;
