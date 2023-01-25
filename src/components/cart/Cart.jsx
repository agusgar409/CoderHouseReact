import React from 'react'
// import Loader from '../loader/Loader'
import "../../container/itemDetailContainer/ItemDetailContainer.css"
import backgroundSvg from '../../assets/background.svg'
import "../../container/itemListContainer/ItemListContainer.css"
import { useContext } from 'react'
import { CartInfo } from '../../context/CartContext'
import ShowCartInfo from './ShowCartInfo'


const Cart = () => {

  const {products} = useContext(CartInfo)

  return (
    <>
      <div style={{position: "relative"}}>
        <img className='backgroundConfig' src={backgroundSvg} alt="background"></img>
        <div className='positionList paddingTop'>
          {Object.keys(products).length === 0 ? 
            null 
            : 
            <ShowCartInfo/>
          }
        </div>
        
      </div>
        
    </>
  )
}

export default Cart