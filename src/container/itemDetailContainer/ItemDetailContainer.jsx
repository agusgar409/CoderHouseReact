import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetails from '../../components/itemDetails/ItemDetails'
import Loader from '../../components/loader/Loader'
import "./ItemDetailContainer.css"
import backgroundSvg from '../../assets/background.svg'
import "../itemListContainer/ItemListContainer.css"

import { db } from '../../firebase/FireBaseConfig';
import { doc, getDoc } from "firebase/firestore"; 

const ItemDetailContainer = () => {

  const {id} = useParams()
  
  const [item, setItem] = useState([])
  

  useEffect(() => {

    const getProduct = async () =>{
      
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef)
      
      if(docSnap.exists()){
        const product = {id: docSnap.id, ...docSnap.data() }
        setItem(product);
      }else{
        console.log("no existe el item!")
      }
    }
    getProduct();

  }, [id])
  
  return (
    <>
      <div style={{position: "relative"}}>
        <img className='rounded backgroundConfig' src={backgroundSvg} alt="background"></img>
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