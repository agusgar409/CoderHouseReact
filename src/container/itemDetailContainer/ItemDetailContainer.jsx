import React from 'react'
import { useParams } from 'react-router'
import ItemDetails from '../../components/itemDetails/ItemDetails'
import Loader from '../../components/loader/Loader'
import "./ItemDetailContainer.css"
import backgroundSvg from '../../assets/background.svg'
import "../itemListContainer/ItemListContainer.css"

import { useFirebaseGetItem } from '../../hooks/useFirebaseGetItem'

const ItemDetailContainer = () => {

  const {id} = useParams()
  
  const [itemFound,loading] = useFirebaseGetItem(id)
  
  return (
    <>
      <div style={{position: "relative"}}>
        <img className='rounded backgroundConfig' src={backgroundSvg} alt="background"></img>
        <div className='positionList paddingTop'>
          {loading ?
            <Loader/>
              : 
            <ItemDetails item={itemFound}/>
          }
        </div>
      </div>
    </>
  )
}

export default ItemDetailContainer