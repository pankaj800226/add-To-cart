// import React from 'react'
// import { toast } from "react-hot-toast"
import { useState } from 'react';
import Product from './Product';
import { productData } from "./Productdata"
import { useDispatch } from "react-redux"


const Home = () => {
  const [searchItem, setSearchItem] = useState('')
  const dispatch = useDispatch()

  const addTocart = (option) => {
    dispatch({ type: "addToCart", payload: option })
    dispatch({ type: "calculatePrice" });
    // toast.success('Add To cart')
}

  return (
    <div>
      <div className="Home_text">
        {/* <h2>Redux Toolkit Store</h2> */}
        <h2>Pankaj Store.in</h2>
        <div className='inp'>
          <input type="text" placeholder='Search Product' onChange={(e) => setSearchItem(e.target.value)} />
        </div>
      </div>
      <div className="home">
        {
          productData.filter((item) => {
            if (searchItem === "") {
              return item;
            } else if (item.name.toLowerCase().includes(searchItem.toLowerCase())) {
              return item
            }
          }).map((i) => {
            return (
              <Product
                key={i.id}
                name={i.name}
                id={i.id}
                price={i.price}
                rating={i.rating}
                imgUrl={i.imgUrl}
                handler={addTocart}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Home