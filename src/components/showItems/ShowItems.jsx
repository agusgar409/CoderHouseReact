import React from 'react'
import Item from '../item/Item'


const ShowItems = ({products}) => {

  return (
    <div className='container'>
      <div className='row justify-content-around'>
        {products.map(elm => {
          return (
            <Item key={elm.id} product={elm}/>
          )
        })}
      </div>
    </div>
    
  )
}

export default ShowItems