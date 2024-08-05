
'use client'
import { useState } from "react"
const Cart = () => {
  const [data, setData] = useState([0,0,0]);

  const handleClick = ()=>{
    const copy = [...data];
    copy[1]++;
    setData(copy);
    console.log(copy)
  }
  return (
    <>
      <h4 className="title">Cart</h4>
      <CartItem />
      <button
        onClick={handleClick}
      >{data[0]}</button>
      <CartItem />
      <button>{data[1]}</button>
      <CartItem />
      <button>{data[2]}</button>
    </>
  )
}

const CartItem = ()=>{
  return(
    <div className="cart-item">
      <p>상품명</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}

export default Cart