import React from 'react'
import { IoIosStarHalf } from "react-icons/io";
// import { Link } from 'react-router-dom';/\


const Product = ({ name, price, imgUrl, handler, rating, id }) => {
    return (
        <div className='product'>
            <img src={imgUrl} alt="item" />
            <p>{name}</p>
            <h3>₹{price}</h3>
            <h2>
                <IoIosStarHalf />
                <IoIosStarHalf />
                <IoIosStarHalf />
                <IoIosStarHalf />
            </h2>
            <button onClick={() => handler({ name, price, imgUrl, rating, id, quantity: 1 })}>AddToCart</button>
         

        </div>
    )
}

export default Product