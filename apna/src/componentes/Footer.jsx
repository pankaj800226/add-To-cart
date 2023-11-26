import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <div className="footer">
        <h2> Copyright © {year} E-CART</h2>
      <p>This Website is awosam and mini functionnality E-CART</p>
        <h2>Developer By Pankaj Kumar.</h2>
        {/* <input type="text"
        />
        <button>Click</button> */}
      </div>

    </>
  )
}

export default Footer