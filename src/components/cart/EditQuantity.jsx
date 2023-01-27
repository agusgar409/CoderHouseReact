import React from 'react'

const EditQuantity = ({product,editAmountProducts}) => {
  return (
    <>
      <div className='row'>
        <div className='col-lg-4'>
          <i onClick={() => editAmountProducts(product,false)} className="bi bi-arrow-down fs-3"/>
        </div>
        <div className='col-lg-4 fs-5'>
          {product.quantity}
        </div>
        <div className='col-lg-4'>
          <i onClick={() => editAmountProducts(product,true)} className="bi bi-arrow-up fs-3"/>
        </div>
      </div>
    </>
  )
}

export default EditQuantity