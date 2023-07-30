import React from 'react'
import ProductsCounter from './ProductsCounter'
import OrderBy from './OrderBy'
import FilterBy from './FilterBy'
import Products from '../Products'


const Home = () => {
    return (<>
        {/* <div className="cart-modal-overlay">
            <div className="cart-modal">
                <i id="close-btn" className="fas fa-times"></i>
                <h1 className="cart-is-empty">Cart is empty</h1>

                <div className="product-rows">
                </div>
                <div className="total">
                    <h1 className="cart-total">TOTAL</h1>
                    <span className="total-price">$0</span>
                    <button className="purchase-btn">PURCHASE</button>
                </div>
            </div>
        </div> */}
        {/* <!--   end of cart modal --> */}
        {/* <div className="cart-btn">
            <i id="cart" className="fas fa-shopping-cart"></i>
            <span className="cart-quantity">00000</span>
        </div> */}

        <aside>
            {/* <h3>filter / order</h3> */}
            <ProductsCounter />
            <hr className="w-100 my-sm border-neutral-border" />
            <OrderBy />
            <hr className="w-100 my-sm border-neutral-border" />
            <FilterBy />

            {/* <div className="accordion">
        <label className="accordion__link">Da Click Para Abrir <input className='accordion__input' type="checkbox" /> </label>
        <div className="accordion__item">
          <p>
            <div>
              <input onChange={algo} type="radio" id="low_price" name="ordenarBY" value="low_price" checked/>
              <label htmlFor="low_price">lowest price</label>
            </div>

            <div>
              <input type="radio" id="high_price" name="ordenarBY" value="high_price"  />
              <label htmlFor="high_price">Highest price</label>
            </div>

            <div>
              <input type="radio" id="best" name="ordenarBY" value="best" />
              <label htmlFor="best">best</label>
            </div>
          </p>

        </div>
      </div> */}

            {/* <div className="accordion">
        <label className="accordion__link">Order by <input className='accordion__input' type="checkbox" /> </label>
        <div className="accordion__item">
          <p>
            <div>
              <input type="radio" id="highest" name="ordenarBY2" value="highest" />
              <label htmlFor="highest">Highest price</label>
            </div>
          </p>
        </div>
      </div> */}

            {/*          <div id='items'></div>
      <div id='cart'></div> */}
        </aside>
        <section className="product-list">
            {/* {console.log("products.length",products.length)} */}
            <Products />
            {/* <paginator /> */}
        </section>

        {/* <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
        // <table><tbody>
        // </tbody></table>
        // <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div> */}
    </>
    )
}

export default Home