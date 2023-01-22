import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

  const {itemId} = useParams()
  const [item, setItem] = useState([])
  const [valueCounter, setValueCounter] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/'+itemId)
      .then(res=>res.json())
      .then(json=>setItem(json))
  }, [itemId])
  
  console.log(item)

  const sumValue = () =>{
    setValueCounter(valueCounter + 1)
  }

  const discountValue = () => {
    if(valueCounter > 0){
      setValueCounter(valueCounter - 1);
    }
  }

  return (
    <>
      {Object.keys(item).length === 0 ?
        <div class="d-flex justify-content-center">
          <div class="spinner-border m-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>

        </div>
          : 
        <div className='container center'>
          <div className='row ' >
            <div className='col-lg-6 col-sm-12 align-self-center'>
              <img style={{width: "18rem" }} src={item.image} alt="imageItem" />
            </div>
            <div className='col-lg-6 col-sm-12'>
              <div>
                <h1>{item.title}</h1>
              </div>
              <div className='pt-5 row justify-content-center'>
              <div className='pt-3'>
            <h2>${item.price}</h2>
          </div>
          <div className='pt-3 row justify-content-between'>
            <div className='col-lg-5'>
              <div className='row'>
                <div className='col-lg-3 align-self-center'>
                  <button onClick={discountValue} type="button" class="btn btn-outline-primary">-</button>
                </div>
                <div className='col-lg-6 align-self-center'>
                  <input className='configuration' type="number" max={99} min={1} name="" id="" value={valueCounter} />
                </div>
                <div className='col-lg-3 align-self-center'>
                  <button onClick={sumValue} type="button" class="btn btn-outline-primary">+</button>
                </div>
              </div>
              
            </div>
            <div className='col-lg-6 align-self-center'>
              <button type="button" class="btn btn-outline-primary">Add to cart</button>
            </div>
          </div>
              </div>
            </div>
          </div>
          <div className='pt-5'>
            <p>{item.description}</p>
          </div>
        </div>
      }
    </>
    
    
  )
}

export default ItemDetailContainer