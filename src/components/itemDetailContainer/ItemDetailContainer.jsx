import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
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
    <div className='container center'>
      <div className='row ' >
        <div className='col-4 align-self-center'>
          <img style={{width: "18rem" }} src={item.image} alt="imageItem" />
        </div>
        <div className='col-8'>
          <div className='row'>
            <title>{item.title}</title>
            <p>{item.price}</p>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default ItemDetailContainer