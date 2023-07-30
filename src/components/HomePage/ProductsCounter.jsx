import React, { useContext } from 'react'
import { appContext } from '../../context/appContext';

const ProductsCounter = () => {
    const { cache, setCache } = useContext(appContext);

    return (<h3>{cache.productsShown} products matching</h3>)

    // <div>
    // </div>
    // else
    //     return (
    //         <div>                
    //             {(cache.products.lenght > 0)
    //                 ? <h2>{products.lenght} products matching</h2>
    //                 : <><h2>hola</h2></>}
    //         </div>
    //     )
}

export default ProductsCounter