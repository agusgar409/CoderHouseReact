import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetails from '../../components/itemDetails/ItemDetails'
import Loader from '../../components/loader/Loader'
import "./ItemDetailContainer.css"
import backgroundSvg from '../../assets/background.svg'
import "../itemListContainer/ItemListContainer.css"

const ItemDetailContainer = () => {

  const {itemId} = useParams()
  const [item, setItem] = useState([])
  

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/'+itemId)
      .then(res=>res.json())
      .then(json=>setItem(json))
  }, [itemId])
  
  return (
    <>
      <div style={{position: "relative"}}>
        <img className='backgroundConfig' src={backgroundSvg} alt="background"></img>
        <div className='positionList paddingTop'>
          {Object.keys(item).length === 0 ?
            <Loader/>
              : 
            <ItemDetails item={item}/>
          }
        </div>
        
      </div>
        
    </>
    
    
  )
}

export default ItemDetailContainer