import React, { useContext } from 'react';

const Product = ({ product, addToCart }) => {
  const { title, price, image, rating } = product;
  // {rating.count>2.5 ? "★" : "☆"}
  return (
    <div className="product">
      <img src={image} alt={title} />
      <span className="product-rating">{rating.rate}</span>
      <h4>{title}</h4>
      <p>{rating.rate} {rating.rate>2.5 ? "★" : "☆"} - ( {rating.count} )</p>
      <p>${price}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
    // <tr className="product">
    // <tr>
    //   <td><img src={image} alt={title} /></td>
    //   <td><h3>{title}</h3>
    //     <p>${price}
    //       <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    //     </p>
    //   </td>
    // </tr>
  );
};

export default Product;

  //   {
  //     id:1,
  //     title:'...',
  //     price:'...',
  //     category:'...',
  //     description:'...',
  //     image:'...'
  //     rating: { rate: '...', count: '...' }
  // },
