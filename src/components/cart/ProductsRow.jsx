import React from 'react'
import EditQuantity from './EditQuantity'

const ProductsRow = ({product,removeItem,editAmountProducts}) => {
  
  return(
    <tr id='overflowColum' className='text-center'>
      <th><img className='rounded  maxSizeCart' src={product.image} alt="imageProduct"/></th>
      <th>{product.title}</th>
      <th>$ {product.price * product.quantity}</th>
      <th scope="col">
        <EditQuantity
          product={product}
          editAmountProducts={editAmountProducts}
      />
      </th>
      <th scope="col" >
        <i onClick={()=>removeItem(product.id)} className="bi bi-trash3 fs-3"></i>
      </th>
    </tr>
  )
}

export default ProductsRow