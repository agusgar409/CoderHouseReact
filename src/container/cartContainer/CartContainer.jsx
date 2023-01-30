import React from 'react'
import "../../container/itemDetailContainer/ItemDetailContainer.css"
import backgroundSvg from '../../assets/background.svg'
import "../../container/itemListContainer/ItemListContainer.css"
import { useContext } from 'react'
import { CartInfo } from '../../context/CartContext'
import Brief from '../../components/cart/Brief'
import EmptyCart from '../../components/cart/EmptyCart'
import Checkout from '../../components/cart/modals/Checkout'
import { useState } from 'react'

const Cart = () => {

  const {removeItem, clear, products,editAmountProducts,total} = useContext(CartInfo)
  
  const [show, setShow] = useState(false);
  
  return (
    <>
      <div style={{position: "relative"}}>
        <img className='backgroundConfig' src={backgroundSvg} alt="background"></img>
        <div className='positionList paddingTop'>
          {Object.keys(products).length === 0 ? 
            <EmptyCart ></EmptyCart>
            : 
            <Brief
              removeItem={removeItem}
              clear={clear}
              editAmountProducts={editAmountProducts}
              products={products}
              total={total}
              setShowModal={setShow}
            />
          }
        </div>
        
      </div>
      <Checkout
        showModal={show}
        setShowModal={setShow}
      />  
    </>
  )
}

export default Cart