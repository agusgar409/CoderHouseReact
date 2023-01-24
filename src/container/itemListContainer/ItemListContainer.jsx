import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import Loader from '../../components/loader/Loader';
import ShowItems from '../../components/showItems/ShowItems'
import backgroundSvg from '../../assets/background.svg'
import "./ItemListContainer.css"

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  const {categoryId} = useParams();
  
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
    <div style={{position: "relative"}}>
      <img className='backgroundConfig' src={backgroundSvg} alt="background"></img>
      <div className='positionList pt-5'>
        {Object.keys(products).length === 0 ?
          <Loader/>
            : 
          <ShowItems products={products}/>
        }
      </div>
    </div>
  )
}

export default ItemListContainer