import React from 'react'
// import Loader from '../loader/Loader'
import "../../container/itemDetailContainer/ItemDetailContainer.css"
import backgroundSvg from '../../assets/background.svg'
import "../../container/itemListContainer/ItemListContainer.css"


const Cart = () => {
  return (
    <>
      <div style={{position: "relative"}}>
        <img className='backgroundConfig' src={backgroundSvg} alt="background"></img>
        <div className='positionList paddingTop'>
          {/* {Object.keys(item).length === 0 ?
            <Loader/>
              : 
            <p>empty for now</p>
          } */}
          <p>emptyForNow</p>
        </div>
        
      </div>
        
    </>
  )
}

export default Cart