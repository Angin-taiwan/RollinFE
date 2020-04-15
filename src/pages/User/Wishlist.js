import React from 'react'
import ItemList from '../../components/User/WishList/ItemList'

function Wishlist() {
  return (
    <>
      <h1>User/Wishlist</h1>
      <div className="container w-75 pull-right mr-5">
        <ItemList />
      </div>
    </>
  )
}

export default Wishlist
