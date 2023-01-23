import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetails from '../../components/itemDetails/ItemDetails'
import Loader from '../../components/loader/Loader'
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

  const {itemId} = useParams()
  const [item, setItem] = useState([])
  

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/'+itemId)
      .then(res=>res.json())
      .then(json=>setItem(json))
  }, [itemId])
  
  console.log(item)



  return (
    <>
      {Object.keys(item).length === 0 ?
        <Loader/>
          : 
        <ItemDetails item={item}/>
      }
    </>
    
    
  )
}

export default ItemDetailContainer