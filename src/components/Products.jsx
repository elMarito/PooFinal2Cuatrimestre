import React, { useEffect, useContext, useState } from 'react'
import { appContext } from '../context/appContext';
import Product from './Product';
// import Cart from './Cart';
// import * as API from "./services/dbAdapter"; //dbAdapter.js

const Products = () => {
  // const [products, setProducts] = useState([]);
  const { cache, setCache } = useContext(appContext);
  let products = cache.products;
  let cart = cache.cart;
  const [counter, setCounter] = useState(0);
  // const { data, loading, error, handleCancelRequest } = cache.dbAdapter;
  
  useEffect(() => {
    setCache((prevState) => ({ ...prevState, productsShown: products.length }));
  }, [counter]);
  //---------------------------------------------------------------------------
  // useEffect(() => {
  //   API.getAllProducts()
  //  .then( data => setCache((prevState) => ({ ...prevState, products: data, })));
  // }, [])
  //---------------------------------------------------------------------------
  useEffect(() => {
    //  fetch(BASE_URL)
    fetch("https://fakestoreapi.com/products")
      .then(res => {
        if (res.ok) return res.json();
        throw new Error(`${res.status}. ${res.statusText}`);
      })
      .then(data => {
        // setCache({ ...cache, products: data });
        setCache((prevState) => ({ ...prevState, products: data, }));
        // console.log(cache);
      })
      .catch(error => console.log(error)/* alert("ojo") */ /* err = setError(err) */)
  }, [])

  const addToCart = (product) => {
    const existingProduct = cart.find(p => p.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(p =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      // setCache({ ...cache, cart: updatedCart });
      setCache((prevState) => ({ ...prevState, cart: updatedCart, }));
      // console.log(cache);
      // setCart(updatedCart);
    } else {
      // setCache({ ...cache, cart: [...cart, { ...product, quantity: 1 }] });
      setCache((prevState) => ({ ...prevState, cart: [...cart, { ...product, quantity: 1 }] }));
      // console.log(cache);
      // setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  //---------------------------------------------------------------------------
  if (!products.length)
    return <h2>Loading...</h2>;
  //---------------------------------------------------------------------------
  if (cache.filters.length > 0) {
    // console.log(cache.filters.length, cache.categories.length);
    const matchAll = (texto) =>
      cache.filters.every(word => texto.toLowerCase().includes(word));
    products = products.filter(prod => matchAll(prod.category));
  }
  //---------------------------------------------------------------------------
  // products.forEach(element => {console.log(element.title);    });
  if (cache.search !== "") {
    // console.log(products.length, "cache.search", cache.search);
    const words = cache.search.toLowerCase().split(" "); // Divide la cadena en palabras individuales
    // const allWordsPresent 
    const matchAll = (texto) =>
      words.every(word => texto.toLowerCase().includes(word));

    products = products.filter(prod =>
      matchAll(`${prod.title} ${prod.category} ${prod.description}`));
    // products = products.filter(prod => (
    //   prod.title.toLowerCase().includes(cache.search.toLowerCase())
    //   || prod.category.toLowerCase().includes(cache.search.toLowerCase())
    //   || prod.description.toLowerCase().includes(cache.search.toLowerCase())
    // ))
  }
  //---------------------------------------------------------------------------
  if (cache.order !== "") {
    const compare = (AA, BB) => { return (AA < BB) ? -1 : ((AA > BB) ? 1 : 0); }
    // console.log("cache.order", cache.order);
    switch (cache.order) {
      case "best"://mas alto
        products = products.sort((a, b) => compare(b.rating.rate, a.rating.rate));
        break;
      case "worst":
        products = products.sort((a, b) => compare(a.rating.rate, b.rating.rate));
        break;
      case "lowest_price":
        products = products.sort((a, b) => compare(a.price, b.price));
        break;
      case "highest_price"://mas alto
        products = products.sort((a, b) => compare(b.price, a.price));
        break;
    }
  }
  //---------------------------------------------------------------------------
  if (counter !== products.length) setCounter(products.length);
  //---------------------------------------------------------------------------  
  return (
    <>
      {/* <table><tbody> */}
      {products.map(prod => (
        <Product key={prod.id} product={prod} addToCart={addToCart} />
      ))}
      {/* </tbody></table> */}
      {/* <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      /> */}
    </>
  )
}

export default Products