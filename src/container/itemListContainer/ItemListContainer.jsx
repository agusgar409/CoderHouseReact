import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import Loader from '../../components/loader/Loader';
import ShowItems from '../../components/showItems/ShowItems'

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const {categoryId} = useParams();
  console.log(categoryId)
  
  useEffect(() => {
    
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(productJson=> {
        if(categoryId){
          const productsFilterByCategory = productJson.filter(product => product.category === categoryId);  
          setProducts(productsFilterByCategory)
        } else {
          setProducts(productJson)
        }
        
      })
  }, [categoryId])

  return (
    <div className='mt-5'>
      {Object.keys(products).length === 0 ?
        <Loader/>
          : 
        <ShowItems products={products}/>
      }
    </div>
  )
}

export default ItemListContainer