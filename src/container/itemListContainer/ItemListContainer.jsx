import React, {useEffect, useState} from 'react'
import ShowItems from '../../components/showItems/ShowItems'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  
  useEffect(() => {
    
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
  
   
  }, [])

  return (
    <div className='mt-5'>
      <title><strong>Our Products</strong></title>
      <ShowItems products={products}/>
    </div>
  )
}

export default ItemListContainer