import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
// import { appContext } from './context/appContext';



import NavBar from './components/NavBar';
import Home from './components/HomePage/Home';
import Cart from './components/Cart';
import Login from './components/Login';

// const [count, setCount] = useState(0)
// --------------------------------------------------------------------------
function App() {
  // const [dbAdapter, setdbAdapter] = useState(new DbAdapter());
  // const [cart, setCart] = useState([]);
  // const [products, setProducts] = useState([]);

  // const { cache, setCache } = useContext(appContext);
  // // console.log(cache);
  // let products = cache?.products || [];
  // let cart = cache?.cart;
  // }  // const products = getProducts(BASE_URL);

  return (<div className="app">
    <header>
      <NavBar />
    </header>
    <main id='body'>
      <Routes>
        {/* <Switch>*/}
        <Route exact path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        {/* <Route path='/Products/:id' element={<Product />} /> */}
        {/* <Route path='/User' element='<User/>'/> */}
        <Route path='/Login' element={<Login/>}/>
        {/* <Route path="*" component={NotFound} /> */}
        {/* </Switch>  */}
      </Routes>
    </main>
    {/* <div id='footer'></div> */}
    <footer>
      <img src='/logo-no-background.svg' alt="logo Mercado Trucho" />
      <p>Copyright Mario Patronelli</p>
    </footer>
  </div>
  );
};

export default App;
