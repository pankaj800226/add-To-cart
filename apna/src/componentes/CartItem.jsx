import React from 'react'
// import { AiFillDelete } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"


const CartItem = ({ name, price, id, imgUrl, qty, increment, decrement, deleteHandler }) => {
    return (
        <div className="cartitem">
            <img src={imgUrl} alt="" />
            <article>
                <p>{name}</p>
                <p>₹{price}</p>
            </article>
            <div>
                <button onClick={() => decrement(id)}>-</button>
                <p>{qty}</p>
                <button onClick={() => increment(id)}>+</button>
            </div>
            <AiFillDelete onClick={() => deleteHandler(id)} />
        </div>
    )
}

export default CartItem