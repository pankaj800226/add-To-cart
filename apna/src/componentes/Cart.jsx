import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const { cartItems, subTotal, shipping, tax, total } = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const increment = (id) => {
        dispatch({
            type: "addToCart",
            payload: { id },
        });
        dispatch({ type: "calculatePrice" });

    }

    const decrement = (id) => {
        dispatch({
            type: "decrement",
            payload: id,
        });
        dispatch({ type: "calculatePrice" });

    }

    const deleteHandler = (id) => {
        dispatch({
            type: "deleteFromcart",
            payload: id,
        });
        dispatch({ type: "calculatePrice" });

    }

    return (
        <div className='cart'>
            <main>
                {
                    cartItems.length > 0 ? (
                        cartItems.map((i) => (
                            <CartItem
                                name={i.name}
                                price={i.price}
                                id={i.id}
                                key={i.id}
                                imgUrl={i.imgUrl}
                                qty={i.quantity}
                                increment={increment}
                                decrement={decrement}
                                deleteHandler={deleteHandler}
                            />
                        ))
                    ) : (
                        <h1>No item yet</h1>
                    )
                }

            </main>

            <aside>
                <h2>Subtotal : ₹{subTotal}</h2>
                <h2>Shipping : ₹{shipping}</h2>
                <h2>Tax : ₹{tax}</h2>
                <h2>Total : ₹{total}</h2>
            </aside>
        </div>
    )
}

export default Cart