import React from 'react'
import "../item/Item.css"
import "../itemDetails/ItemDetails.css"
import "./Cart.css"


const ShowCartInfo = ({products,removeItem,addProduct,clear}) => {

  return (
    <div className='container centerItemDetails backgroundColor'>
      <div className='baseCart row'>

        <div className='rwo align-items-center'>
          <div className='col-lg-12 align-self-center'>
            Carrito de compras
          </div>
        </div>
        
        {products.map(prod => {

          return(
            <>
              <div className='col-lg-12 baseProduct'>
                <div className='row'>
                  <div className='col-4'>imagen</div>
                  <div className='col-4'>nombre</div>
                  <div className='col-3'>cantidad</div>
                  <div className='col-1'>x</div>
                </div>
              </div>
            </>
          )

        })}
      </div>
    </div>
  )
}

export default ShowCartInfo