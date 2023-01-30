import React from 'react'
// import Loader from '../loader/Loader'
import "../../container/itemDetailContainer/ItemDetailContainer.css"
import backgroundSvg from '../../assets/background.svg'
import "../../container/itemListContainer/ItemListContainer.css"
import { useContext } from 'react'
import { CartInfo } from '../../context/CartContext'
import ShowCartInfo from './ShowCartInfo'
import EmptyCart from './EmptyCart'
import OrderModal from './modals/OrderModal'
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
            <ShowCartInfo
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
      <OrderModal
        showModal={show}
        setShowModal={setShow}
      />  
    </>
  )
}

export default Cart