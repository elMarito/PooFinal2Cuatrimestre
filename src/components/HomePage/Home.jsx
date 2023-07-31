import React from 'react'
import ProductsCounter from './ProductsCounter'
import OrderBy from './OrderBy'
import FilterBy from './FilterBy'
import Products from '../Products'

const Home = () => {
    return (<>
        <aside>
            <ProductsCounter />
            <hr className="w-100 my-sm border-neutral-border" />
            <OrderBy />
            <hr className="w-100 my-sm border-neutral-border" />
            <FilterBy />
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