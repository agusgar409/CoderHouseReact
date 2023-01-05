import React, {useEffect, useState} from 'react'
import ShowItem from '../../components/showItem/ShowItem'




const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  
  useEffect(() => {
    
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
  
   
  }, [])

  return (
    <div className='text-center'>
      <ShowItem products={products}/>
    </div>
  )
}

export default ItemListContainer