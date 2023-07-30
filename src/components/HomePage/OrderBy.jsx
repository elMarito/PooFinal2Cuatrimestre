import React, { useContext } from 'react'
import { appContext } from '../../context/appContext';

const OrderBy = () => {
    const { cache, setCache } = useContext(appContext);

    const handleChange = (e) => {
        // e.preventDefault();
        // if (e.target.value == cache.order) return
        // console.log(e.target.value);
        setCache((prevState) => ({ ...prevState, order: e.target.value, }));
    }
    
    const isChecked = (option) => cache.order === option;

    return (
        <div className='order'>
            <fieldset>
                <legend>Order by:</legend>

                <div>
                    <input onChange={handleChange} type="radio" id="best" name="order" value="best" checked={isChecked("best")} />
                    <label htmlFor="best">Best rating</label>
                </div>
                <div>
                    <input onChange={handleChange} type="radio" id="worst" name="order" value="worst" checked={isChecked("worst")} />
                    <label htmlFor="worst">Worst rating</label>
                </div>

                <div>
                    <input onChange={handleChange} type="radio" id="lowest_price" name="order" value="lowest_price" checked={isChecked("lowest_price")} />
                    <label htmlFor="lowest_price">Lowest price</label>
                </div>

                <div>
                    <input onChange={handleChange} type="radio" id="highest_price" name="order" value="highest_price" checked={isChecked("highest_price")} />
                    <label htmlFor="highest_price">Highest price</label>
                </div>
            </fieldset>
        </div>
    )
}

export default OrderBy