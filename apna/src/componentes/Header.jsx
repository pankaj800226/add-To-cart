import React from 'react'
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import { BsHandbagFill } from "react-icons/bs"

const Header = () => {
  const {cartItems} = useSelector(state => state.cart)
  return (
  <>
    <header>
      <Link to="/"><h2>MyStore</h2></Link>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/cart">
      <BsHandbagFill />
      <sub>{cartItems.length}</sub>
      </Link>
    </nav>
    </header>
  </>

  )
}

export default Header