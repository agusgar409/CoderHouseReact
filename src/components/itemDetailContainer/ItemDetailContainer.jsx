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
        <div className='col-lg-6 col-sm-12 align-self-center'>
          <img style={{width: "18rem" }} src={item.image} alt="imageItem" />
        </div>
        <div className='col-lg-6 col-sm-12'>
          <div>
            <h1>{item.title}</h1>
          </div>
          
          <div className='pt-3'>
            <h2>${item.price}</h2>
          </div>
          <div className='pt-3 row justify-content-between'>
            <div className='col-lg-5'>
              <div className='row'>
                <div className='col-lg-4 align-self-center'>
                  <button type="button" class="btn btn-outline-primary">-</button>
                </div>
                <div className='col-lg-4 align-self-center'>
                  <input type="number" name="" id="" />
                </div>
                <div className='col-lg-4 align-self-center'>
                  <button type="button" class="btn btn-outline-primary">+</button>
                </div>
              </div>
              
            </div>
            <div className='col-lg-6 align-self-center'>
              <button type="button" class="btn btn-outline-primary">Add to cart</button>
            </div>
          </div>

        </div>
      </div>
      <div className='pt-5'>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default ItemDetailContainer